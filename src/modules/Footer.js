import React from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 border-t-2 border-secondary bg-primary p-10 text-secondary">
      <div className="flex gap-x-2 text-4xl">
        <a
          href="https://www.facebook.com/bannhacngot"
          className="transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/bannhac.ngot/"
          className="transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.youtube.com/c/Ng%E1%BB%8Dtband"
          className="transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutubeSquare />
        </a>
      </div>
      <p className="text-lg">
        Made by
        <a
          href="https://www.facebook.com/tandat.nguyen.1042032/"
          className="hover:text-contrast ml-1"
        >
          Me
        </a>
      </p>
    </div>
  );
};

export default Footer;
