import React from "react";

const ContentWraper = ({
  title,
  subTitle,
  titleColor,
  children,
  bgColor,
  ...props
}) => {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className={`mx-auto py-[100px] px-3 lg:w-[1250px] ${titleColor}`}>
        <h1 className="mb-[38px] text-center text-5xl font-medium tracking-wider">
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

export default ContentWraper;
