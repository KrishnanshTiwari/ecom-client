import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button1 from "../components/Button1";
import Loader from "../components/Loader";

function ProductDashboard() {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://ecommerce-backend-w0k9.onrender.com/seller/sellerproductlist",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            sessionToken: token,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDetails(data);
        setLoading(false);
        //console.log(data);
      } else {
        alert("something went wrong...");
      }
    } catch (error) {
      console.error("Error during products loading:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://ecommerce-backend-w0k9.onrender.com/seller/deleteproduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            sessionToken: token,
          },
        }
      );

      if (response.ok) {
        const updatedDetails = details.filter(product => product._id !== id);
        setDetails(updatedDetails);
        setLoading(false);
        console.log("Product deleted successfully.");
      } else {
        alert("something went wrong...");
      }
    } catch (error) {
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
      <>
      <div className="min-h-[60vh] mx-auto mt-12 max-w-7xl px-8 sm:px-12 lg:px-16 my-6">
        <ul>
          {details.map((product) => (
            <li key={product._id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-[#2d163f]">
                    <h3>
                      <button onClick={() => navigate(`/product-detail/${product._id}`)}>{product.title}</button>
                    </h3>
                    <p className="ml-4">Rs. {product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-[#5d476e]">{product.color}</p>
                  <div>
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-700 ml-1">{product.rating}</span>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-purple-600 hover:text-purple-500"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-between mt-5 mb-7 px-12 sm:px-16 lg:px-20">
        <Link to="/seller-order"><Button1 data="Browse orders" /></Link>
        <Link to="/add-product"><Button1 data="Add Product" /></Link>
      </div>
      </>
      ) :
     <div className="min-h-[60vh]"></div>
    }
    </>
  );
}

export default ProductDashboard;
