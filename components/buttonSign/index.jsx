import React from "react";

const button = ({ text }) => {
  const add = () => {
    console.log("sala");
  };
  return (
    <div>
      <button
        type="submit"
        onClick={add}
        className="focus:bg-admin-signBtnFocusColor text-admin-colorLogin bg-admin-signBtnColor focus:outline-none shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight"
      >
        {text}
      </button>
    </div>
  );
};

export default button;
