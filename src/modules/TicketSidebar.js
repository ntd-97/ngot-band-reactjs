import React, { useRef, useEffect } from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

import TicketItem from "../components/TicketItem";
import CustomButton from "../components/CustomButton";

import useClickOutside from "../hooks/useClickOutside";

import avatar from "../assets/images/avatar.jpg";

import { useDispatch, useSelector } from "react-redux";
import { setLoginInfo } from "../redux/slices/loginSlice";
import {
  getUserTickets,
  setUserTickets,
  setOpenTicketSideBar,
} from "../redux/slices/ticketSlice";

const TicketSidebar = () => {
  // click outside handler
  const ticketSidebar = useRef();
  useClickOutside(ticketSidebar, setOpenTicketSideBar);

  const { loginInfo } = useSelector((state) => state.login);
  const { userTickets, openTicketSideBar } = useSelector(
    (state) => state.ticket
  );
  const dispatch = useDispatch();

  // logout handler
  const logOutHandler = () => {
    dispatch(setLoginInfo({}));
    dispatch(setUserTickets([]));
    dispatch(setOpenTicketSideBar(false));
    localStorage.clear();
  };

  // get user's ticket
  useEffect(() => {
    if (loginInfo._id) {
      dispatch(getUserTickets(loginInfo._id));
    }
  }, [loginInfo._id, dispatch]);

  return (
    <div
      className={` ${
        openTicketSideBar
          ? "absolute inset-0 z-[60] overflow-hidden bg-primary bg-opacity-60"
          : ""
      }`}
    >
      <div
        ref={ticketSidebar}
        className={`no-scrollbar fixed right-0 top-0 z-[60] flex h-[100vh] w-full flex-col overflow-scroll bg-primary px-3 pb-4 transition-all ease-linear lg:w-1/2 2xl:w-[30%] ${
          openTicketSideBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`flex h-[73px] items-center text-secondary`}>
          <HiArrowNarrowRight
            className="text-3xl transition-all hover:cursor-pointer hover:text-contrast"
            onClick={() => {
              dispatch(setOpenTicketSideBar(false));
            }}
          />
          <h1 className="flex-1 text-center text-2xl font-medium">Tickets</h1>
        </div>

        <div className="no-scrollbar flex flex-1 flex-col gap-y-3 overflow-scroll">
          {userTickets.length > 0 ? (
            userTickets.map((ticket) => (
              <TicketItem
                key={ticket._id}
                imgUrl={ticket.show.poster}
                title={ticket.show.title}
                location={ticket.show.location}
                date={ticket.show.date}
                userName={loginInfo.fullName}
                email={loginInfo.email}
                phone={loginInfo.phone}
                amount={ticket.amount}
                createdDate={ticket.createdDate}
                price={ticket.ticketType.price}
                ticketType={{
                  type: ticket.ticketType.type,
                  description: ticket.ticketType.description,
                }}
              />
            ))
          ) : (
            <h1 className="mx-auto my-auto text-xl text-contrast">
              Không có vé
            </h1>
          )}
        </div>

        <div className="hidden items-center justify-between pt-4 text-secondary md:flex">
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
      </div>
    </div>
  );
};

export default TicketSidebar;
