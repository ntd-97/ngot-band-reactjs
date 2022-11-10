import React from "react";

import PropTypes from "prop-types";

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
      className={`${className} transition-all hover:bg-opacity-[85%] disabled:bg-opacity-[60%]`}
      onClick={onClickHandler}
      {...props}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClickHandler: PropTypes.func,
  type: PropTypes.string,
};

export default CustomButton;
