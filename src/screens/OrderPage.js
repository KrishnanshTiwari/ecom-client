import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchOrders = async () => {
    try {
      const response = await fetch("https://ecommerce-backend-w0k9.onrender.com/user/getorders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          sessionToken: token,
        },
      });

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
            <div className="min-h-[60vh] mx-auto mt-12 pt-6 max-w-7xl px-8 sm:px-12 lg:px-16 my-6">
              <div className="flex flex-col">
                {orders.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white py-6 sm:px-8 px-4 mb-4 shadow-sm flex sm:flex-row flex-col"
                  >
                    <div className="flex flex-col mr-3  sm:w-[30%]">
                      <div className="text-2xl font-bold">{product.date}</div>
                      <div className="text-sm font-semibold text-gray-600">
                        Payment mode : {product.payment}
                      </div>
                      <div className="text-sm font-semibold text-gray-600">
                        Total Amount : Rs. {product.total}
                      </div>
                      <div className="text-sm font-semibold text-gray-600">
                        Net Payable Amount : Rs. {product.cost}
                      </div>
                      <div className="text-sm font-semibold ">
                        {product?.shipping?.address}
                      </div>
                      <div className="text-sm font-semibold">
                        <span>{product?.shipping?.zip} </span>
                        <span>{product?.shipping?.city}</span>
                      </div>
                      <div className="text-sm font-semibold ">
                        {product?.shipping?.state}
                      </div>
                      <div className="text-sm text-red-500">
                        (After discount and Platform fees)
                      </div>
                    </div>
                    <div className="grid grid-cols-5 sm:w-[70%] mt-3 justify-items-center">
                      <div className="col-span-1 font-bold">Item</div>
                      <div className="col-span-1 font-bold">Price</div>
                      <div className="col-span-1 font-bold">Quantity</div>
                      <div className="col-span-1 font-bold">Total</div>
                      <div className="col-span-1 font-bold"></div>{" "}
                      {product.products.map((item) => (
                        <React.Fragment key={item.id}>
                          <div className="col-span-1">{item.name}</div>
                          <div className="col-span-1">Rs {item.price}</div>
                          <div className="col-span-1">{item.quantity}</div>
                          <div className="col-span-1">
                            Rs.
                            {(parseFloat(item.price) * item.quantity).toFixed(
                              2
                            )}
                          </div>
                          <div className="col-span-1"></div>{" "}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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

export default OrderPage;
