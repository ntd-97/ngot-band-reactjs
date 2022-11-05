import React from "react";

const CustomButton = ({ className, children, onClickHandler, ...props }) => {
  return (
    <button
      className={`${className} transition-all hover:bg-opacity-[85%]`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default CustomButton;
