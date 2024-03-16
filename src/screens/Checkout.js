import React, { useState } from "react";
import Button1 from "../components/Button1";
import Loader from "../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState("COD");
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
  const makeOrder = async () => {
    try {
      setLoading(true);
      const products = cartItems.map((item) => ({
        name: item.title,
        id: item.productid,
        price: item.price,
        quantity: item.quantity,
      }));
      const response = await fetch("http://localhost:8000/user/addtoorders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          sessionToken: token,
        },
        body: JSON.stringify({ products, total, cost: netTotal, payment }),
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
                      key={item.id}
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
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="payment"
                  className="block font-semibold leading-6 text-[#2d163f]"
                >
                  Payment Method
                </label>
              </div>
              <div className="mt-2 sm:w-1/4 w-[100%]">
                <select
                  id="payment"
                  name="payment"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset placeholder:text-gray-400  focus:ring-purple-800 sm:text-sm sm:leading-6"
                >
                  <option value="COD">COD</option>
                  <option value="PAY ONLINE">PAY ONLINE</option>
                </select>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-8 sm:right-12 lg:right-16 w-30">
            <Button1 data="Make Order" onClick={makeOrder} />
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh]"></div>
      )}
    </>
  );
};

export default Checkout;
