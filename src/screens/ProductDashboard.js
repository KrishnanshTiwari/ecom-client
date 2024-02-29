import React from "react";
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
  return (
    <>
      <div className="min-h-[60vh] mx-auto mt-12 max-w-7xl px-8 sm:px-12 lg:px-16 my-6">
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
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="ml-4">{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-[#5d476e]">{product.color}</p>
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
        <button
          type="submit"
          className="flex text-xl justify-center rounded-md bg-[#4d2f62] px-4 py-2 font-bold leading-6 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Browse Orders
        </button>
        <button
          type="submit"
          className="flex text-xl justify-center rounded-md bg-[#4d2f62] px-4 py-2 font-bold leading-6 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Product
        </button>
      </div>
    </>
  );
}

export default ProductDashboard;
