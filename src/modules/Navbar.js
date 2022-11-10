import React from "react";

import Logo from "../assets/images/logo.jpg";

import { HiMenu, HiOutlineTicket } from "react-icons/hi";

import CustomButton from "../components/CustomButton";

import { useDispatch, useSelector } from "react-redux";
import { setOpenLoginForm } from "../redux/slices/loginSlice";
import { setOpenSignUpForm } from "../redux/slices/signUpSlice";
import { setOpenTicketSideBar } from "../redux/slices/ticketSlice";
import { setOpenMenuSideBar } from "../redux/slices/commonInfoSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { loginInfo } = useSelector((state) => state.login);
  const { userTickets, openTicketSideBar } = useSelector(
    (state) => state.ticket
  );

  return (
    <div className="Navbar fixed top-0 z-50 flex h-[73px] w-full items-center justify-between bg-primary px-5 xl:pl-16 xl:pr-20">
      <HiMenu
        className="cursor-pointer text-3xl text-secondary transition-all md:hidden lg:hover:scale-110"
        onClick={() => {
          dispatch(setOpenMenuSideBar(true));
        }}
      />
      <div className="flex items-center gap-x-5 text-xl font-medium text-secondary">
        <img
          src={Logo}
          alt="logo"
          className="h-[50px] w-[50px] cursor-pointer rounded-full"
          onClick={() => {
            window.scroll(0, 0);
          }}
        />
        <a href="#band" className="navItem hidden md:inline-block">
          Giới Thiệu
        </a>
        <a href="#shows" className="navItem hidden md:inline-block">
          Shows
        </a>
        <a href="#albums" className="navItem hidden md:inline-block">
          Albums
        </a>
        <a href="#contact" className="navItem hidden md:inline-block">
          Liên Hệ
        </a>
      </div>
      <div className="flex gap-x-2 text-secondary">
        {!loginInfo?._id && (
          <>
            <CustomButton
              className="hidden rounded-lg border-2 border-secondary px-2 py-1 text-lg hover:border-contrast md:block"
              onClickHandler={() => {
                dispatch(setOpenLoginForm(true));
              }}
            >
              Đăng nhập
            </CustomButton>

            <CustomButton
              className="hidden rounded-lg bg-contrast px-3 py-1 text-lg md:block"
              onClickHandler={() => {
                dispatch(setOpenSignUpForm(true));
              }}
            >
              Đăng ký
            </CustomButton>
          </>
        )}

        {loginInfo?._id && (
          <div className="relative">
            <HiOutlineTicket
              className="cursor-pointer text-4xl transition-all lg:hover:scale-110"
              onClick={() => {
                dispatch(setOpenTicketSideBar(!openTicketSideBar));
              }}
            />
            <span className="absolute -right-4 -top-3 rounded-full bg-contrast py-[2px] px-[7px] font-medium">
              {userTickets.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
