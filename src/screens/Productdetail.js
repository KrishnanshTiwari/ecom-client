import React from "react";

function Productdetail() {
  return (
    <>
      <div className="relative flex flex-col sm:flex-row w-[90%] mx-auto my-5 px-4 min-h-[60vh]">
        <div className="sm:h-[40%] sm:w-[40%] w-full h-full flex-shrink-0 overflow-hidden rounded-md border border-gray-200 flex flex-col">
          <h1 className="text-4xl text-center mt-5 font-bold tracking-tight text-[#2d163f] mb-4">
            Leather Bag
          </h1>
          <img
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
            alt="img"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col p-5">
          <p className="text-justify font-semibold text-[#5d476e]">
            In this example, the flex class is applied to the container to make
            it a flex container. The justify-between class is used to distribute
            the items along the main axis with space between them. Each item has
            a bg-gray-300 class for a gray background and a p-4 class for
            padding. Adjust the classes as needed for your layout.
          </p>
          <div className="flex flex-row mt-4 font-bold text-xl text-[#2d163f] justify-between">
            <div>$240</div>
            <div>Bags</div>
          </div>
          <div className="mt-4 font-semibold text-lg text-[#2d163f]">
            <h3>Seller : Shukla Abhishek</h3>
          </div>
          <div className="absolute bottom-0 right-0">
          <button
            type="submit"
            className="flex text-xl justify-center rounded-md bg-[#4d2f62] px-4 py-2 font-bold leading-6 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Checkout
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetail;
