import React, { useContext } from "react";

import Logo from "../assets/images/logo.jpg";

import { HiOutlineTicket } from "react-icons/hi";

import { TicketSidebarContext } from "../App";

import CustomButton from "../components/CustomButton";

import { useDispatch, useSelector } from "react-redux";
import { setOpenLoginForm } from "../redux/slices/loginSlice";

const Navbar = () => {
  const { openTicketSidebar, setOpenTicketSidebar } =
    useContext(TicketSidebarContext);

  const dispatch = useDispatch();

  const { loginInfo } = useSelector((state) => state.login);

  return (
    <div className="Navbar fixed top-0 z-50 flex h-[73px] w-full items-center justify-between bg-primary pl-16 pr-20">
      <div className="flex gap-x-5 text-xl font-medium text-secondary">
        <img
          src={Logo}
          alt="logo"
          className="h-[50px] w-[50px] cursor-pointer rounded-full"
          onClick={() => {
            window.scroll(0, 0);
          }}
        />
        <a href="#band" className="navItem">
          Giới Thiệu
        </a>
        <a href="#shows" className="navItem">
          Shows
        </a>
        <a href="#albums" className="navItem">
          Albums
        </a>
        <a href="#contact" className="navItem">
          Liên Hệ
        </a>
      </div>
      <div className="flex gap-x-2 text-secondary">
        {!loginInfo?._id && (
          <CustomButton
            className="rounded-lg bg-contrast px-2 py-1 text-lg"
            onClickHandler={() => {
              dispatch(setOpenLoginForm(true));
            }}
          >
            Đăng nhập
          </CustomButton>
        )}

        {loginInfo?._id && (
          <div className="relative">
            <HiOutlineTicket
              className="cursor-pointer text-4xl transition-all lg:hover:scale-110"
              onClick={() => {
                setOpenTicketSidebar(!openTicketSidebar);
              }}
            />
            <span className="absolute -right-4 -top-3 rounded-full bg-contrast py-[2px] px-[7px] font-medium">
              12
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
