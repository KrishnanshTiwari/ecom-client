import React from 'react';

export default function ProductCard(props) {
  const { id, name, imageSrc, imageAlt, price, color } = props.data;

  return (
    <div key={id} className="bg-[#DFE6E8] shadow-lg m-3 h-1/3 w-1/3 sm:w-1/5">
      <div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
}
