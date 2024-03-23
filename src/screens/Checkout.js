import React, { useState } from "react";
import Button1 from "../components/Button1";
import Loader from "../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const location = useLocation();
  const { cartItems } = location.state;
  const navigate = useNavigate();
  if (!cartItems || cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
  };

  const token = localStorage.getItem("token");
  const total = calculateTotal();
  const discount = total * 0.2;
  const platformFees = 25;
  const netTotal = total - discount + platformFees;
  const makeOrder = async (pay) => {
    try {
      setLoading(true);
      const products = cartItems.map((item) => ({
        name: item.title,
        id: item.productid,
        price: item.price,
        quantity: item.quantity,
      }));
      const response = await fetch("https://ecommerce-backend-w0k9.onrender.com/user/addtoorders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          sessionToken: token,
        },
        body: JSON.stringify({
          products,
          total,
          cost: netTotal,
          payment: pay,
          address,
          city,
          state,
          zip
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        alert("Ordered Succesfully");
        navigate("/");
        //console.log(data);
      } else {
        alert("something went wrong...");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during products loading:", error);
    }
  };
  const cod = () => {
    makeOrder("cod");
  };
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.crossOrigin = "anonymous"; // Add crossorigin attribute
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  
  const razorPay = async () => {
    //const res = await loadScript("https://pmny.in/yrz5HA0GJgxs")
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: process.env.RAZORPAY_KEY,
      currency: "INR",
      amount: 100,
      name: "E-Cart",
      description: "Ordering 1 thumbnail",
      image: "xyz",

      handler: function (response) {
        alert("Payment Successfully");
        makeOrder("pay-online");
        // alert ("payment id: " + response.razorpay_payment_id)
      },
      prefill: {
        name: "E-Cart",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      {loading && <Loader />}
      {!loading ? (
        <div className="min-h-[60vh] mx-auto pt-3 max-w-7xl px-8 sm:px-12 lg:px-16 my-6 relative pb-6 border">
          <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6 mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-[#2d163f] border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#ddd4e5]">
                    <th className="py-2 px-4 border">Item</th>
                    <th className="py-2 px-4 border">Price</th>
                    <th className="py-2 px-4 border">Quantity</th>
                    <th className="py-2 px-4 border">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr
                      key={item._id}
                      className={`${
                        index % 2 !== 0 ? "bg-[#ddd4e5]" : "bg-white"
                      }`}
                    >
                      <td className="py-2 px-4 text-center">{item.title}</td>
                      <td className="py-2 px-4 text-center">{item.price}</td>
                      <td className="py-2 px-4 text-center">{item.quantity}</td>
                      <td className="py-2 px-4 text-center">
                        {(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-[#2d163f] font-semibold">
              <p>Total: ${total.toFixed(2)}</p>
              <p>Discount (20%): ${discount.toFixed(2)}</p>
              <p>Platform Fees: ${platformFees.toFixed(2)}</p>
              <p>Net Total: ${netTotal.toFixed(2)}</p>
            </div>
            <div className="mt-4 bg-[#ddd4e5] px-4 py-6">
              <h2 className="mb-5 text-lg font-bold text-[#2d163f]">
                Shipping Details :
              </h2>
              <div className="flex sm:flex-row flex-col gap-2">
                <div className="flex flex-col w-full">
                  <div className="mb-3">
                    <label
                      htmlFor="add"
                      className="block text-sm font-medium leading-6 text-[#2d163f]"
                    >
                      Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="add"
                        name="add"
                        type="add"
                        autoComplete="add"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium leading-6 text-[#2d163f]"
                    >
                      ZIP
                    </label>
                    <div className="mt-2">
                      <input
                        id="zip"
                        name="zip"
                        type="zip"
                        autoComplete="zip"
                        required
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="mb-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-[#2d163f]"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="city"
                        autoComplete="city"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium leading-6 text-[#2d163f]"
                    >
                      State
                    </label>
                    <div className="mt-2">
                      <input
                        id="state"
                        name="state"
                        type="state"
                        autoComplete="state"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Button1 data="Pay Online" onClick={razorPay} />
            <Button1 data="Pay as COD" onClick={cod} />
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh]"></div>
      )}
    </>
  );
};

export default Checkout;
