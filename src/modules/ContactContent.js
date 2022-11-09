import React from "react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import ContentWraper from "../components/ContentWraper";
import CustomButton from "../components/CustomButton";

import { useSelector } from "react-redux";

const ContactContent = () => {
  const { location, phone, email } = useSelector((state) => state.commonInfo);

  return (
    <ContentWraper
      title={"Liên hệ"}
      titleColor={"text-secondary"}
      subTitle={"Ngọt!"}
      bgColor={"bg-primary"}
      id={"contact"}
    >
      <div className="mt-20 flex flex-col justify-between gap-y-4 lg:flex-row">
        <div className="flex flex-col gap-y-4 text-xl">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            {location}
          </p>
          <p className="flex items-center">
            <BsPhoneFill className="mr-1" />
            Điện Thoại: {phone}
          </p>
          <p className="flex items-center">
            <MdEmail className="mr-1" />
            Email: {email}
          </p>
        </div>
        <div className="flex flex-col gap-y-3 text-lg text-primary lg:gap-y-2">
          <div className="flex flex-col gap-x-2 gap-y-3 lg:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg p-2"
            />
            <input type="text" placeholder="Name" className="rounded-lg p-2" />
          </div>
          <input type="text" placeholder="Message" className="rounded-lg p-2" />
          <CustomButton
            className={
              "mt-1 rounded-lg border-2 border-secondary py-2 font-bold text-secondary hover:scale-95"
            }
          >
            Gửi
          </CustomButton>
        </div>
      </div>
    </ContentWraper>
  );
};

export default ContactContent;
