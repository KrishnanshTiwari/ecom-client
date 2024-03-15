import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button1 from "../components/Button1";
import Loader from "../components/Loader";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/user/getCart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          sessionToken: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
        setLoading(false);
        //console.log(data);
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
  const removeItem = async (id) => {
    try {
      //setLoading(true);
      const response = await fetch(
        `http://localhost:8000/user/deleteCart/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            sessionToken: token,
          },
        }
      );

      if (response.ok) {
        const updatedDetails = cartItems.filter(product => product._id !== id);
        setCartItems(updatedDetails);
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

  return (
    <>
      {loading && <Loader />}
      {!loading ? (
        <div className="min-h-[60vh] mx-auto mt-12 pt-6 max-w-7xl px-8 sm:px-12 lg:px-16 my-6 relative border  pb-6 ">
          <div className="bg-white mb-6 px-3">
            <ul>
              {cartItems.map((product) => (
                <li key={product.productid} className="flex py-6">
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
                          <button onClick={() => navigate(`/product-detail/${product.productid}`)}>
                          {" "}
                          {product.title.length > 20
                            ? `${product.title.slice(0, 20)}...`
                            : product.title}
                          </button>
                        </h3>
                        <p className="ml-4">Rs. {product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-[#5d476e]">
                        {product.color}
                      </p>
                    </div>
                    <div className="flex justify-between sm:flex-row flex-col-reverse text-base">
                      <div className="mt-2 flex justify-end items-end">
                        <button
                          type="button"
                          className="font-medium text-purple-600 hover:text-purple-500 mb-2"
                          onClick={() => removeItem(product._id)}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-2 flex justify-start items-start font-medium text-sm text-[#2d163f]">
                        <label
                          htmlFor={`quantity-${product.title}`}
                          className="mr-2"
                        >
                          Quantity:
                        </label>
                        <select
                          id={`quantity-${product.id}`}
                          name={`quantity-${product.id}`}
                          value={product.quantity}
                          onChange={(e) =>
                            setCartItems((prevItems) =>
                              prevItems.map((item) =>
                                item.id === product.id
                                  ? {
                                      ...item,
                                      quantity: parseInt(e.target.value),
                                    }
                                  : item
                              )
                            )
                          }
                          className="border border-gray-300 rounded-md px-3 py-1"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute bottom-0 right-8 sm:right-12 lg:right-16 w-30">
            <Link to="/checkout" state={{ cartItems: cartItems }}>
              <Button1 data="Checkout" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh]"></div>
      )}
    </>
  );
};

export default Cart;
