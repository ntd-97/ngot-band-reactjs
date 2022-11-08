import React, { useContext, useRef, useEffect } from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

import { TicketSidebarContext } from "../App";

import TicketItem from "../components/TicketItem";
import CustomButton from "../components/CustomButton";

import useClickOutside from "../hooks/useClickOutside";

import avatar from "../assets/images/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setLoginInfo } from "../redux/slices/loginSlice";
import { getUserTickets, setUserTickets } from "../redux/slices/ticketSlice";

const TicketSidebar = () => {
  const { openTicketSidebar, setOpenTicketSidebar } =
    useContext(TicketSidebarContext);

  const ticketSidebar = useRef();

  useClickOutside(ticketSidebar, setOpenTicketSidebar);

  const { loginInfo } = useSelector((state) => state.login);
  const { userTickets } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(setLoginInfo({}));
    dispatch(setUserTickets([]));
    setOpenTicketSidebar(false);
    localStorage.clear();
  };

  useEffect(() => {
    if (loginInfo._id) {
      dispatch(getUserTickets(loginInfo._id));
    }
  }, [loginInfo._id, dispatch]);

  return (
    <div
      className={` ${
        openTicketSidebar
          ? "absolute inset-0 z-[60] overflow-hidden bg-primary bg-opacity-60"
          : ""
      }`}
    >
      <div
        ref={ticketSidebar}
        className={`no-scrollbar fixed right-0 top-0 z-[60] flex h-[100vh] flex-col overflow-scroll bg-primary px-3 pb-3 transition-all ease-linear lg:w-[30%] ${
          openTicketSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`flex h-[73px] items-center text-secondary`}>
          <HiArrowNarrowRight
            className="text-3xl transition-all hover:cursor-pointer hover:text-contrast"
            onClick={() => {
              setOpenTicketSidebar(!openTicketSidebar);
            }}
          />
          <h1 className="flex-1 text-center text-2xl font-medium">Tickets</h1>
        </div>

        <div className="no-scrollbar flex flex-1 flex-col gap-y-3 overflow-scroll">
          {userTickets.map((ticket) => (
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
          ))}
        </div>

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
            className={"rounded-lg bg-contrast px-2 py-1 text-lg"}
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
