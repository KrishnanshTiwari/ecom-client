import React, { useState } from "react";
import Button1 from '../components/Button1';
import { Link } from "react-router-dom";

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

export default function Cart() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="min-h-[60vh] mx-auto mt-12 max-w-7xl px-8 sm:px-12 lg:px-16 my-6 relative">
        <ul>
          {products.map((product) => (
            <li key={product.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-[#2d163f]">
                    <h3>
                      <Link to="/product-detail">{product.name}</Link>
                    </h3>
                    <p className="ml-4">{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-[#5d476e]">{product.color}</p>
                </div>
                <div>
                  <div className="flex justify-between text-base">
                    <button
                      type="button"
                      className="font-medium text-purple-600 hover:text-purple-500"
                    >
                      Remove
                    </button>
                    <div class="flex items-center font-medium text-sm text-[#2d163f]">
                      <label for="quantity" class="mr-2">
                        Quantity:
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        class="border border-gray-300 rounded-md px-3 py-1"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                        <option value="3">7</option>
                        <option value="3">8</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="absolute right-8 w-30"><Button1 data = "Checkout" /></div> 
      </div>
    </>
  );
}
