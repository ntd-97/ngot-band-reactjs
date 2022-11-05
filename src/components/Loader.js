import React from "react";

const Loader = ({ cssClass, loading }) => {
  return (
    <div
      className={`${
        loading ? "opacity-1 block" : "hidden opacity-0"
      }  ${cssClass} transtion-all border-y-contrast border-l-contrast mx-auto animate-spin rounded-full  border-r-transparent`}
    ></div>
  );
};

export default Loader;
