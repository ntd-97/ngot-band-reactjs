import React, { useRef } from "react";

import { HiArrowNarrowLeft } from "react-icons/hi";

import avatar from "../assets/images/avatar.jpg";

import { useDispatch, useSelector } from "react-redux";

import CustomButton from "../components/CustomButton";

import useClickOutside from "../hooks/useClickOutside";

import { setOpenMenuSideBar } from "../redux/slices/commonInfoSlice";
import { setOpenLoginForm, setLoginInfo } from "../redux/slices/loginSlice";
import { setOpenSignUpForm } from "../redux/slices/signUpSlice";
import { setUserTickets } from "../redux/slices/ticketSlice";

const MenuSidebar = () => {
  const { loginInfo } = useSelector((state) => state.login);
  const { openMenuSideBar } = useSelector((state) => state.commonInfo);
  const dispatch = useDispatch();

  // click outside handler
  const menuSidebar = useRef();
  useClickOutside(menuSidebar, setOpenMenuSideBar);

  // close menu sidebar handler
  const closeMenuSidebarHandler = () => {
    dispatch(setOpenMenuSideBar(false));
  };

  // logout hnadler
  const logOutHandler = () => {
    dispatch(setLoginInfo({}));
    dispatch(setUserTickets([]));
    dispatch(setOpenMenuSideBar(false));
    localStorage.clear();
  };

  return (
    <div
      className={`${
        openMenuSideBar
          ? "absolute inset-0 z-[60] overflow-hidden bg-primary bg-opacity-60"
          : ""
      }`}
    >
      <div
        ref={menuSidebar}
        className={`no-scrollbar fixed left-0 top-0 z-[60] flex h-[100vh] w-full flex-col overflow-scroll bg-primary px-3 pb-3 transition-all ease-linear lg:w-[30%] ${
          openMenuSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`relative mb-10 flex h-[73px] items-center text-secondary`}
        >
          <h1 className=" flex-1 text-center text-2xl font-medium">Menu</h1>
          <HiArrowNarrowLeft
            className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl transition-all hover:cursor-pointer hover:text-contrast"
            onClick={closeMenuSidebarHandler}
          />
        </div>

        <div className="flex flex-col items-center gap-y-10 text-xl font-medium text-secondary">
          <a
            href="#band"
            className="navItem w-full text-center"
            onClick={closeMenuSidebarHandler}
          >
            Giới Thiệu
          </a>
          <a
            href="#shows"
            className="navItem w-full text-center"
            onClick={closeMenuSidebarHandler}
          >
            Shows
          </a>
          <a
            href="#albums"
            className="navItem w-full text-center"
            onClick={closeMenuSidebarHandler}
          >
            Albums
          </a>
          <a
            href="#contact"
            className="navItem w-full text-center"
            onClick={closeMenuSidebarHandler}
          >
            Liên Hệ
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-y-4 px-5 pb-5 text-secondary lg:px-10 lg:pb-10">
          {!loginInfo?._id && (
            <>
              <CustomButton
                className="rounded-lg border-2 border-secondary px-2 py-1 text-lg hover:border-contrast"
                onClickHandler={() => {
                  dispatch(setOpenMenuSideBar(false));
                  dispatch(setOpenLoginForm(true));
                }}
              >
                Đăng nhập
              </CustomButton>

              <CustomButton
                className="rounded-lg bg-contrast px-3 py-1 text-lg"
                onClickHandler={() => {
                  dispatch(setOpenMenuSideBar(false));
                  dispatch(setOpenSignUpForm(true));
                }}
              >
                Đăng ký
              </CustomButton>
            </>
          )}

          {loginInfo._id && (
            <div className="flex items-center justify-between pt-3 text-secondary">
              <div className="flex items-center gap-x-2">
                <img
                  src={avatar}
                  alt="avatar img"
                  className="h-10 w-10 rounded-full"
                />
                <p className="text-lg">{loginInfo?.fullName}</p>
              </div>
              <CustomButton
                className={"rounded-lg bg-contrast px-3 py-1 text-lg"}
                onClickHandler={logOutHandler}
              >
                Đăng xuất
              </CustomButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
