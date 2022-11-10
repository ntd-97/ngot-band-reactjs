import React from "react";

import PropTypes from "prop-types";

const Loader = ({ cssClass, loading }) => {
  return (
    <div
      className={`${
        loading ? "opacity-1 block" : "hidden opacity-0"
      }  ${cssClass} transtion-all mx-auto animate-spin rounded-full border-y-contrast border-l-contrast  border-r-transparent`}
    ></div>
  );
};

Loader.propTypes = {
  cssClass: PropTypes.string,
  loading: PropTypes.bool,
};

export default Loader;
