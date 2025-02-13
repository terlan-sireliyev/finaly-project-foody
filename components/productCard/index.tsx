import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import PageHeader from "../pageHeader/index";
const index = () => {
  return (
    <>
      <div className="max-sm:w-full  max-md:w-60 max-lg:w-60 border boder-sm bg-admin-TextCheck">
        <div className="flex justify-center">
          <img
            src="../images/productImg.svg"
            alt="Have yor error"
            className=""
          />
        </div>
        <div className="ml-2">
          <h3>Margarita</h3>
          <h2 className="text-admin-inputBorder">Papa John</h2>
        </div>
        <div className="mx-2 my-2 flex justify-between">
          <p className="text-admin-inProductproPrice  text-productSize mt-2">
            6.90Azn
          </p>
          <button className="mr-2">
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="text-admin-inProductTrashBack"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
