import React from "react";

function Button1(props) {
  return (
    <>
      <button
        type={props.type} onClick={props.onClick}
        className="flex w-full justify-center rounded-md bg-[#4d2f62] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.data}
      </button>
    </>
  );
}

export default Button1;
