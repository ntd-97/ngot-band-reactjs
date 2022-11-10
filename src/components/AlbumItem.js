import React from "react";
import { FaHeadphonesAlt } from "react-icons/fa";

import CustomButton from "./CustomButton";

const AlbumItem = ({
  imgUrl,
  title,
  date,
  description,
  albumLink,
  ...props
}) => {
  return (
    <div className="flex flex-col rounded-lg text-lg shadow-2xl transition-all hover:scale-105 hover:cursor-pointer md:flex-row">
      <img
        src={imgUrl}
        alt="album img"
        className="rounded-t-lg object-cover md:w-[45%] md:rounded-l-lg md:rounded-tr-none lg:w-[280px]"
      />
      <div className="flex flex-col justify-between gap-y-2 p-[30px]">
        <h1 className="text-[27px] font-bold">{title}</h1>
        <p className="font-medium opacity-60">{date}</p>
        <p className="text-justify">{description}</p>
        <CustomButton
          className={
            "ml-auto rounded-lg bg-primary py-2 px-3 text-secondary lg:w-[100px]"
          }
        >
          <a
            href={albumLink}
            className="flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHeadphonesAlt className="mr-1 inline-block" /> Nghe
          </a>
        </CustomButton>
      </div>
    </div>
  );
};

export default AlbumItem;
