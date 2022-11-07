import React from "react";

const CustomButton = ({
  className,
  children,
  onClickHandler,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${className} transition-all hover:bg-opacity-[85%]`}
      onClick={onClickHandler}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
