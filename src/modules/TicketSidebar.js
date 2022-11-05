import React, { useContext, useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { TicketSidebarContext } from "../App";
import TicketItem from "../components/TicketItem";

import useClickOutside from "../hooks/useClickOutside";

const TicketSidebar = () => {
  const { openTicketSidebar, setOpenTicketSidebar } =
    useContext(TicketSidebarContext);

  const ticketSidebar = useRef();

  useClickOutside(ticketSidebar, setOpenTicketSidebar);

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
            className="hover:text-contrast text-3xl transition-all hover:cursor-pointer"
            onClick={() => {
              setOpenTicketSidebar(!openTicketSidebar);
            }}
          />
          <h1 className="flex-1 text-center text-2xl font-medium">Tickets</h1>
        </div>
        <div className="no-scrollbar flex flex-1 flex-col gap-y-3 overflow-scroll">
          <TicketItem
            imgUrl={
              "https://res.cloudinary.com/yelpcampcloudimg/image/upload/v1667231682/ngot-band/shows/313205932_735743951248315_6390225782124995825_n_nlsoo1.jpg"
            }
            title={"NHẠC NGỌT ĐỂ ĐỜI"}
            location={"Nhà hát Quân đội, 140 Cộng Hòa, P.4, Q.Tân Bình, TP.HCM"}
            date={"20:00 - 19/11/2022"}
            userName={"Nguyễn Văn A"}
            email={"abc@gmail.com"}
            amount={"3"}
            createdDate={"20:00 - 01/11/2022"}
            ticketType={{
              type: "VIP",
              description: "Vị trí trước sân khấu, bao gồm nước và poster",
            }}
            phone={"0909055734"}
          />
          <TicketItem
            imgUrl={
              "https://res.cloudinary.com/yelpcampcloudimg/image/upload/v1667231682/ngot-band/shows/313205932_735743951248315_6390225782124995825_n_nlsoo1.jpg"
            }
            title={"NHẠC NGỌT ĐỂ ĐỜI"}
            location={"Nhà hát Quân đội, 140 Cộng Hòa, P.4, Q.Tân Bình, TP.HCM"}
            date={"20:00 - 19/11/2022"}
            userName={"Nguyễn Văn A"}
            email={"abc@gmail.com"}
            amount={"3"}
            createdDate={"20:00 - 01/11/2022"}
            ticketType={{
              type: "VIP",
              description: "Vị trí trước sân khấu, bao gồm nước và poster",
            }}
            phone={"0909055734"}
          />
          <TicketItem
            imgUrl={
              "https://res.cloudinary.com/yelpcampcloudimg/image/upload/v1667231682/ngot-band/shows/313205932_735743951248315_6390225782124995825_n_nlsoo1.jpg"
            }
            title={"NHẠC NGỌT ĐỂ ĐỜI"}
            location={"Nhà hát Quân đội, 140 Cộng Hòa, P.4, Q.Tân Bình, TP.HCM"}
            date={"20:00 - 19/11/2022"}
            userName={"Nguyễn Văn A"}
            email={"abc@gmail.com"}
            amount={"3"}
            createdDate={"20:00 - 01/11/2022"}
            ticketType={{
              type: "VIP",
              description: "Vị trí trước sân khấu, bao gồm nước và poster",
            }}
            phone={"0909055734"}
          />
          <TicketItem
            imgUrl={
              "https://res.cloudinary.com/yelpcampcloudimg/image/upload/v1667231682/ngot-band/shows/313205932_735743951248315_6390225782124995825_n_nlsoo1.jpg"
            }
            title={"NHẠC NGỌT ĐỂ ĐỜI"}
            location={"Nhà hát Quân đội, 140 Cộng Hòa, P.4, Q.Tân Bình, TP.HCM"}
            date={"20:00 - 19/11/2022"}
            userName={"Nguyễn Văn A"}
            email={"abc@gmail.com"}
            amount={"3"}
            createdDate={"20:00 - 01/11/2022"}
            ticketType={{
              type: "VIP",
              description: "Vị trí trước sân khấu, bao gồm nước và poster",
            }}
            phone={"0909055734"}
          />
          <TicketItem
            imgUrl={
              "https://res.cloudinary.com/yelpcampcloudimg/image/upload/v1667231682/ngot-band/shows/313205932_735743951248315_6390225782124995825_n_nlsoo1.jpg"
            }
            title={"NHẠC NGỌT ĐỂ ĐỜI"}
            location={"Nhà hát Quân đội, 140 Cộng Hòa, P.4, Q.Tân Bình, TP.HCM"}
            date={"20:00 - 19/11/2022"}
            userName={"Nguyễn Văn A"}
            email={"abc@gmail.com"}
            amount={"3"}
            createdDate={"20:00 - 01/11/2022"}
            ticketType={{
              type: "VIP",
              description: "Vị trí trước sân khấu, bao gồm nước và poster",
            }}
            phone={"0909055734"}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketSidebar;
