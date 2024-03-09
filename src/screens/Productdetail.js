import React from "react";
import Button1 from "../components/Button1";
import { Link } from "react-router-dom";
function Productdetail() {
  return (
    <>
      <div className="relative flex flex-col sm:flex-row w-[90%] mx-auto my-5 px-4 min-h-[60vh]">
        <div className="sm:h-[40%] sm:w-[40%] w-full h-full flex-shrink-0 overflow-hidden rounded-md border border-gray-200 flex flex-col">
          <h1 className="text-3xl text-center mt-5 font-bold tracking-tight text-[#2d163f] mb-4">
            Leather Bag
          </h1>
          <img
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
            alt="img"
            className="h-[80%] w-[80%] object-cover object-center mx-auto"
          />
        </div>
        <div className="flex flex-col p-5">
          <p className="text-justify text-sm font-semibold text-[#5d476e]">
            In this example, the flex class is applied to the container to make
            it a flex container. The justify-between class is used to distribute
            the items along the main axis with space between them. Each item has
            a bg-gray-300 class for a gray background and a p-4 class for
            padding. Adjust the classes as needed for your layout.
          </p>
          <div className="flex flex-row mt-4 font-bold text-lg text-[#2d163f] justify-between">
            <div>$240</div>
            <div>Bags</div>
          </div>
          <div className="mt-4 font-semibold text-[#2d163f]">
            <h3>Seller : Shukla Abhishek</h3>
              <div className="text-sm text-[#2d163f]">
                Rating : <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-700">4.5</span>
              </div>
          </div>
          <div className="absolute -bottom-1 right-1">
            <Link to="/">
              <Button1 data="Add to Cart" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetail;
