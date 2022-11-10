import React from "react";

import PropTypes from "prop-types";

const BannerImageItem = ({ imgUrl }) => {
  return (
    <div className="BannerItem relative mt-[73px]">
      <img
        src={imgUrl}
        alt="banner img"
        className="h-[93vh] w-full object-cover"
      />
      <div className="z-3 absolute  bottom-[8%] left-1/2 -translate-x-1/2 text-center text-secondary">
        <p className="mb-4 text-5xl tracking-widest">Ngọt</p>
        <p className="text-xl tracking-[4px] text-gray-300">
          Chúng tôi chơi nhạc!
        </p>
      </div>
    </div>
  );
};

BannerImageItem.propTypes = {
  imgUrl: PropTypes.string,
};

export default BannerImageItem;
