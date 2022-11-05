import React from "react";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

import BannerImageItem from "../components/BannerImageItem";
import CustomSlider from "../components/CustomSlider";

const BannerImage = () => {
  const { bannerImgUrl } = useSelector((state) => state.commonInfo);

  return (
    <div className="relative">
      <CustomSlider
        specifyClass="bannerImg"
        paginationClass="banner"
        autoPlay={true}
      >
        {bannerImgUrl.map((img) => (
          <SwiperSlide key={img}>
            <BannerImageItem imgUrl={img} />
          </SwiperSlide>
        ))}
      </CustomSlider>
    </div>
  );
};

export default BannerImage;
