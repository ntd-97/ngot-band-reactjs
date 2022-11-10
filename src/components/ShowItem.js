import React from "react";

import CustomButton from "./CustomButton";

import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import {
  setOpenTicketBooking,
  setShowId,
} from "../redux/slices/ticketBookingSlice";

const ShowItem = ({
  imgUrl,
  title,
  date,
  location,
  description,
  amount,
  showId,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col justify-between transition-all hover:scale-95 hover:cursor-pointer">
      <img src={imgUrl} alt="poster" className="w-full rounded-t-xl" />
      <div className="flex flex-1 flex-col justify-between gap-y-2 rounded-b-xl bg-secondary p-3 text-center text-primary">
        {amount === 0 && (
          <p className="absolute top-2 right-2 rounded-xl bg-[#DC2626] px-2 py-1 text-secondary">
            sold out
          </p>
        )}
        <h2 className="text-xl font-medium">{title}</h2>
        <h3 className="font-medium italic">{location}</h3>
        <h3 className="italic opacity-60">{date}</h3>
        <p className="text-justify line-clamp-3">{description}</p>

        <CustomButton
          className="rounded-lg bg-primary py-[10px] text-secondary"
          onClickHandler={() => {
            dispatch(setShowId({ showId: showId }));
            dispatch(setOpenTicketBooking(true));
          }}
          disabled={amount === 0 ? true : false}
        >
          Mua vé
        </CustomButton>
      </div>
    </div>
  );
};

ShowItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  showId: PropTypes.string,
};

export default ShowItem;
