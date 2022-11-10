import React from "react";

import PropTypes from "prop-types";

const ContentWraper = ({
  title,
  subTitle,
  titleColor,
  children,
  bgColor,
  id,
}) => {
  return (
    <div className={`w-full ${bgColor}`} id={id}>
      <div
        className={`mx-auto w-full py-[100px] px-3 xl:w-[1250px] ${titleColor}`}
      >
        <h1 className="mb-[38px] text-center text-4xl font-medium tracking-wider md:text-5xl">
          {title}
        </h1>
        <p className="mb-[38px] text-center text-xl italic opacity-60">
          {subTitle}
        </p>
        {children}
      </div>
    </div>
  );
};

ContentWraper.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  titleColor: PropTypes.string,
  children: PropTypes.node,
  bgColor: PropTypes.string,
  id: PropTypes.string,
};

export default ContentWraper;
