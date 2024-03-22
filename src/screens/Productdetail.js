import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Button1 from "../components/Button1";
function Productdetail() {
  const { isLoggedIn } = useAuth();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/productdetail/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDetail(data);
        setLoading(false);
        //console.log(data);
      } else {
        alert("something went wrong...");
      }
    } catch (error) {
      console.error("Error during products loading:", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      //setLoading(true);
      const response = await fetch(
        `http://localhost:8000/user/addtocart/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            sessionToken: token,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Added to cart");
        //setDetail(data);
        //setLoading(false);
        //console.log(data);
      } else {
        //setLoading(false);
        alert("something went wrong...");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during products loading:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading ? (
        <div className="relative flex flex-col sm:flex-row w-[90%] mx-auto my-5 px-4 min-h-[60vh]">
          <div className="sm:h-[40%] sm:w-[40%] w-full h-full flex-shrink-0 overflow-hidden rounded-md border border-gray-200 flex flex-col">
            <h1 className="text-3xl text-center mt-5 font-bold tracking-tight text-[#2d163f] mb-4">
              {detail.title}
            </h1>
            <img
              src={detail.image}
              alt="img"
              className="h-[80%] w-[80%] object-cover object-center mx-auto"
            />
          </div>
          <div className="flex flex-col sm:w-[60%] p-5">
            <p className="text-justify text-sm font-semibold text-[#5d476e]">
              {detail.description}
            </p>
            <div className="flex flex-row mt-4 font-bold text-lg text-[#2d163f] justify-between">
              <div>Rs. {detail.price}</div>
              <div>{detail.category}</div>
            </div>
            <div className="mt-4 font-semibold text-[#2d163f]">
              <h3>Seller : {detail.sellerName}</h3>
              <div className="text-sm text-[#2d163f]">
                Rating : <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-700">{detail.rating}</span>
              </div>
            </div>
            {isLoggedIn && (
              <div className="absolute -bottom-1 right-1">
                <Button1 onClick={() => handleAddToCart()} data="Add to Cart" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh]"></div>
      )}
    </>
  );
}

export default Productdetail;
