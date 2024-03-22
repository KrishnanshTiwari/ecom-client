import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button1 from "../components/Button1";
import Loader from "../components/Loader";
export default function Profile() {
  const [deatails, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://ecommerce-backend-w0k9.onrender.com/user/getDetails",
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
      console.error("Error during Profile fetch:", error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading ? (
        <div className="min-h-[60vh] flex justify-center items-center py-6">
          <div className="w-4/5">
            <div className="text-3xl md:text-5xl font-bold text-[#2d163f] mb-3">
              {deatails?.username}
            </div>
            <div className="text-xl font-semibold text-[#5d476e] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {deatails?.email}
            </div>

            <div className="text-xl font-semibold text-[#5d476e] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              {deatails?.phone}
            </div>
            {deatails?.isSeller ? (
              <div>
                <div className="py-4 px-6">
                  <table className="w-full text-[#2d163f]">
                    <tbody>
                      <tr className="bg-[#ddd4e5]">
                        <td className="border border-gray-300 px-4 py-2">
                          Bank
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {deatails?.bank}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-2">
                          {deatails?.account}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {deatails?.gst}
                        </td>
                      </tr>
                      <tr className="bg-[#ddd4e5]">
                        <td className="border border-gray-300 px-4 py-2">
                          IFSC
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {deatails?.ifsc}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-2">
                          GST
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          GST123456789
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <></>
            )}
            {deatails?.isSeller ? (
              <div className="flex flex-row justify-between mt-5">
                <Link to="/edit-seller">
                  <Button1 data="Edit Details" />
                </Link>
                <Link to="/product-dashboard">
                  <Button1 data="Dashboard" />
                </Link>
              </div>
            ) : (
              <div className="flex flex-row justify-between mt-5">
                <Link to="/order-page">
                  <Button1 data="Your Orders" />
                </Link>
                <Link to="/become-seller">
                  <Button1 data="Become a Seller" />
                </Link>
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
