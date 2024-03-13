import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Button1 from "../components/Button1";
const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];
function ProductDashboard() {
  const [deatails, setDetails] = useState([]);
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:8000/seller/sellerproductlist",
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
        console.log(data);
      } else {
        alert("something went wrong...");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="min-h-[60vh] mx-auto mt-12 max-w-7xl px-8 sm:px-12 lg:px-16 my-6">
        <ul>
          {deatails.map((product) => (
            <li key={product.id} className="flex py-6">
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
                      <a href={product.href}>{product.title}</a>
                    </h3>
                    <p className="ml-4">{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-[#5d476e]">{product.color}</p>
                  <div>
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-700 ml-1">4.5</span>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-purple-600 hover:text-purple-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-between mt-5 mb-7 px-12 sm:px-16 lg:px-20">
        <Link to = '/seller-order'><Button1 data = "Browse orders" /></Link>
        <Link to = '/add-product'><Button1 data = "Add Product" /></Link>
      </div>
    </>
  );
}

export default ProductDashboard;
