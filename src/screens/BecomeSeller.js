import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import Button1 from "../components/Button1";
import { useNavigate } from "react-router-dom";
import Loader from '../components/Loader'
export default function BecomeSeller() {
  const [gst, setGst] = useState("");
  const [bank, setBank] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const { setSeller } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://ecommerce-backend-w0k9.onrender.com/register-seller",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "sessionToken" : token,
          },
          body: JSON.stringify({ gst, bank, account, ifsc }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSeller(true);
        setLoading(false);
        //console.log(data);
        navigate("/profile")
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
    {loading && <Loader />}
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-[#2d163f]">
        Become a Seller
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="bank"
              className="block text-sm font-medium leading-6 text-[#2d163f]"
            >
              Bank Name
            </label>
            <div className="mt-2">
              <input
                id="bank"
                name="bank"
                type="bank"
                autoComplete="bank"
                required
                value = {bank}
                onChange={(e)=>setBank(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="account"
                className="block text-sm font-medium leading-6 text-[#2d163f]"
              >
                Account Number
              </label>
            </div>
            <div className="mt-2">
              <input
                id="account"
                name="account"
                type="account"
                autoComplete="account"
                required
                value={account}
                onChange={(e)=> setAccount(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="ifsc"
                className="block text-sm font-medium leading-6 text-[#2d163f]"
              >
                IFSC
              </label>
            </div>
            <div className="mt-2">
              <input
                id="ifsc"
                name="ifsc"
                type="ifsc"
                required
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="gst"
                className="block text-sm font-medium leading-6 text-[#2d163f]"
              >
                GST Number
              </label>
            </div>
            <div className="mt-2">
              <input
                id="gst"
                name="gst"
                type="gst"
                required
                value={gst}
                onChange={(e)=>setGst(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-[#2d163f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Button1 onClick={handleRegister} data="Save Details" type="submit" />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
