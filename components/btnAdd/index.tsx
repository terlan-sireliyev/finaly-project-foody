import React from "react";

const index = ({ btnName, open, setOpen, clFeature }: any) => {
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <button className={clFeature} onClick={closeMenu}>
        {btnName}
      </button>
    </>
  );
};

export default index;
