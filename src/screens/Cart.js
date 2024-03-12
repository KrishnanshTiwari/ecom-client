import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Cart = () => {
  const [cartItems, setCartItems] = useState(products);

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="min-h-[60vh] mx-auto mt-12 pt-6 max-w-7xl px-8 sm:px-12 lg:px-16 my-6 relative border  pb-6 ">
        <div className="bg-white mb-6 px-3">
        <ul>
          {cartItems.map((product) => (
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
                    <h3>{product.name}</h3>
                    <p className="ml-4">{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-[#5d476e]">{product.color}</p>
                  <div>
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-700 ml-1">4.5</span>
                  </div>
                </div>
                <div className="flex justify-between text-base">
                  <button
                    type="button"
                    className="font-medium text-purple-600 hover:text-purple-500"
                    onClick={() => removeItem(product.id)}
                  >
                    Remove
                  </button>
                  <div className="flex items-center font-medium text-sm text-[#2d163f]">
                    <label htmlFor={`quantity-${product.id}`} className="mr-2">
                      Quantity:
                    </label>
                    <select
                      id={`quantity-${product.id}`}
                      name={`quantity-${product.id}`}
                      value={product.quantity}
                      onChange={(e) =>
                        setCartItems((prevItems) =>
                          prevItems.map((item) =>
                            item.id === product.id
                              ? { ...item, quantity: parseInt(e.target.value) }
                              : item
                          )
                        )
                      }
                      className="border border-gray-300 rounded-md px-3 py-1"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
        <div className="absolute bottom-0 right-8 sm:right-12 lg:right-16 w-30">
        <Link to="/checkout" state={{ cartItems: cartItems }} >
          <Button1 data="Checkout" />
        </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
