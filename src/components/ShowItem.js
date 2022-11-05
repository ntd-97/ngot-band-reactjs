import React, { useContext } from "react";

import { TicketBookingContext } from "../App";

import CustomButton from "./CustomButton";

const ShowItem = ({ imgUrl, title, date, location, description, amount }) => {
  const { setOpenTicketBooking } = useContext(TicketBookingContext);
  return (
    <div className="relative flex flex-col justify-between transition-all hover:scale-95 hover:cursor-pointer">
      <img src={imgUrl} alt="poster" className="w-full rounded-t-xl" />
      <div className="flex flex-1 flex-col justify-between gap-y-2 rounded-b-xl bg-secondary p-3 text-center text-primary">
        <p className="absolute top-2 right-2 rounded-full bg-[#DC2626] px-2 py-1 text-secondary">
          {amount}
        </p>
        <h2 className="text-xl font-medium">{title}</h2>
        <h3 className="font-medium italic">{location}</h3>
        <h3 className="italic opacity-60">{date}</h3>
        <p className="text-justify line-clamp-3">{description}</p>

        <CustomButton
          className="rounded-lg bg-primary py-[10px] text-secondary"
          onClickHandler={() => {
            setOpenTicketBooking(true);
          }}
        >
          Mua vé
        </CustomButton>
      </div>
    </div>
  );
};

export default ShowItem;
