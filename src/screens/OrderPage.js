import React from "react";

const productHistory = [
  {
    id: 1,
    product: [
      {
        id: 1,
        Name: "Shirt",
        price: "1000",
        quantity: "1",
      },
      {
        id: 2,
        Name: "pant",
        price: "1500",
        quantity: "1",
      },
      {
        id: 3,
        Name: "Shoes",
        price: "1800",
        quantity: "1",
      },
    ],
    date: "2024-03-09T15:30:45",
    total : "4300",
    cost: "3465",
    payment: "COD",
  },
  {
    id: 2,
    product: [
      {
        id: 1,
        Name: "Kurta",
        price: "1000",
        quantity: "1",
      },
      {
        id: 2,
        Name: "Jeans",
        price: "1500",
        quantity: "1",
      },
      {
        id: 3,
        Name: "Shoes",
        price: "1800",
        quantity: "1",
      },
    ],
    date: "2024-04-09T15:30:45",
    total : "4300",
    cost: "3465",
    payment: "COD",
  },
  // More products...
];

function OrderPage() {

  return (
    <>
      <div className="min-h-[60vh] mx-auto mt-12 pt-6 max-w-7xl px-8 sm:px-12 lg:px-16 my-6">
        <div className="flex flex-col">
          {productHistory.map((product) => (
            <div key = {product.id} className="bg-white py-6 sm:px-8 px-4 mb-4 shadow-sm flex sm:flex-row flex-col">
              <div className="flex flex-col mr-3  sm:w-[30%]">
                <div className="text-2xl font-bold">{product.date}</div>
                <div className="text-sm font-semibold text-gray-600">
                  Payment mode : {product.payment}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  Total Amount : {product.total}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  Net Payable Amount : {product.cost}
                </div>
                <div className="text-sm text-red-500">
                  (After discount and Platform fees)
                </div>
              </div>
              <div className="grid grid-cols-5 sm:w-[70%] mt-3 justify-items-center">
                <div className="col-span-1 font-bold">Item</div>
                <div className="col-span-1 font-bold">Price</div>
                <div className="col-span-1 font-bold">Quantity</div>
                <div className="col-span-1 font-bold">Total</div>
                <div className="col-span-1 font-bold"></div>{" "}
                {product.product.map((item) => (
                  <React.Fragment key={item.id}>
                    <div className="col-span-1">{item.Name}</div>
                    <div className="col-span-1">{item.price}</div>
                    <div className="col-span-1">{item.quantity}</div>
                    <div className="col-span-1">
                      {(
                        parseFloat(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </div>
                    <div className="col-span-1"></div>{" "}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderPage;
