import React, { useContext } from "react";

import Logo from "../assets/images/logo.jpg";

import { HiOutlineTicket } from "react-icons/hi";

import { TicketSidebarContext } from "../App";

const Navbar = () => {
  const { openTicketSidebar, setOpenTicketSidebar } =
    useContext(TicketSidebarContext);

  return (
    <div className="Navbar fixed top-0 z-50 flex h-[73px] w-full items-center justify-between bg-primary pl-16 pr-20">
      <div className="flex gap-x-5 text-xl font-medium text-secondary">
        <img
          src={Logo}
          alt="logo"
          className="h-[50px] w-[50px] cursor-pointer rounded-full"
        />
        <a href="#abc" className="navItem">
          Giới Thiệu
        </a>
        <a href="#abc" className="navItem">
          Shows
        </a>
        <a href="#abc" className="navItem">
          Albums
        </a>
        <a href="#abc" className="navItem">
          Liên Hệ
        </a>
      </div>
      <div className="relative text-secondary">
        <HiOutlineTicket
          className="cursor-pointer text-4xl transition-all lg:hover:scale-110"
          onClick={() => {
            setOpenTicketSidebar(!openTicketSidebar);
          }}
        />
        <span className="absolute -right-5 -top-3 rounded-full bg-red-600 py-[2px] px-[7px] font-medium">
          12
        </span>
      </div>
    </div>
  );
};

export default Navbar;
