import React from "react";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  const { id, name, imageSrc, imageAlt, price, color } = props.data;

  return (
    <div
      key={id}
      className="bg-[#ede0f7] shadow-lg m-3 w-[40%] sm:w-1/5 text-white p-3 rounded transition-transform transform hover:scale-105"
    >
      <Link to = '/productDetail'>
      <div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="sm:px-3 px-1.5 py-2">
        <div className="  flex justify-between">
          <div className="w-3/5 overflow-hidden">
            <h3 className="text-sm text-gray-700 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {name}
            </h3>
          </div>
          <div className="text-sm font-medium text-gray-900">{price}</div>
        </div>
        <div className="flex justify-between">
          <p className="mt-1 text-sm text-gray-500">{color}</p>
          <div className="flex items-center">
          <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-700 ml-1">4.5</span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
