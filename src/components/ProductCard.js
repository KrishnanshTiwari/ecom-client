import React from "react";
import { useNavigate } from "react-router-dom";
export default function ProductCard(props) {
  const navigate = useNavigate();
  const { _id, title, image, price, category, rating } = props.data;
  return (
    <div
      key={_id}
      className="bg-[#ede0f7] cursor-pointer shadow-lg w-full text-white p-3 rounded transition-transform transform hover:scale-105"
      onClick={() => navigate(`/product-detail/${_id}`)}
    >
      <div>
        <img className="w-full" src={image} alt="img" />
      </div>
      <div className="sm:px-3 px-1.5 py-2">
        <div className="  flex justify-between">
          <div className="w-3/5 overflow-hidden">
            <h3 className="text-sm text-gray-700 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {title}
            </h3>
          </div>
          <div className="text-sm font-medium text-gray-900">Rs. {price}</div>
        </div>
        <div className="flex justify-between">
          <p className="mt-1 text-sm text-gray-500">{category}</p>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-700 ml-1">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
