import React from "react";
import Button1 from "../components/Button1";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { cartItems } = location.state;
  const navigate = useNavigate();
  if (!cartItems || cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace("$", "")) * item.quantity;
    }, 0);
  };

  const total = calculateTotal();
  const discount = total * 0.2;
  const platformFees = 25;
  const netTotal = total - discount + platformFees;

  return (
    <div className="min-h-[60vh] mx-auto mt-12 max-w-7xl px-8 sm:px-12 lg:px-16 my-6 relative">
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6  max-w-[90%] mx-auto">
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
                className={`${index % 2 !== 0 ? "bg-[#ddd4e5]" : "bg-white"}`}
              >
                <td className="py-2 px-4 text-center">{item.name}</td>
                <td className="py-2 px-4 text-center">{item.price}</td>
                <td className="py-2 px-4 text-center">{item.quantity}</td>
                <td className="py-2 px-4 text-center">
                  {(
                    parseFloat(item.price.replace("$", "")) * item.quantity
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <p>Total: ${total.toFixed(2)}</p>
          <p>Discount (20%): ${discount.toFixed(2)}</p>
          <p>Platform Fees: ${platformFees.toFixed(2)}</p>
          <p>Net Total: ${netTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="absolute right-16 w-30">
        <Button1 data="Make Order" />
      </div>
    </div>
  );
};

export default Checkout;
