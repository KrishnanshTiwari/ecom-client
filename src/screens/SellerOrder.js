import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";

function SellerOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/seller/sellerorderedproduct",
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
        setOrders(data);
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
    fetchOrders();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading ? (
        <>
          {orders.length !== 0 ? (
            <div className="min-h-[60vh] mx-auto mt-12 max-w-7xl px-8 sm:px-12 lg:px-16 my-6">
              <ul>
                {orders.map((product) => (
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
                          <h3>{product.title}</h3>
                          <p className="ml-4">Rs. {product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-[#5d476e]">
                          {product.category}
                        </p>
                        <div>
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm text-gray-700 ml-1">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <div className="font-semibold pt-1 text-[#2d163f]">
                        <div>Total Number of Orders : {product.order}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="min-h-[60vh] flex justify-center items-center text-red-500">
              No orders available
            </div>
          )}
        </>
      ) : (
        <div className="min-h-[60vh]"></div>
      )}
    </>
  );
}

export default SellerOrder;
