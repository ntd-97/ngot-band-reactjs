import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setOpenTicketBooking } from "../redux/slices/ticketBookingSlice";
import { getShowDetails } from "../redux/slices/showDetailsSlice";
import { setErrorMsg } from "../redux/slices/signUpSlice";

import { RiCloseCircleLine } from "react-icons/ri";

import Portal from "../components/Portal";
import TicketTypeItem from "../components/TicketTypeItem";
import Loader from "../components/Loader";
import TicketBookingForm from "../components/TicketBookingForm";

const TicketBooking = () => {
  // tickit type state
  const [ticketTypeChecked, setTicketTypeChecked] = useState({
    id: "",
    price: 0,
  });

  // amount state
  const [amount, setAmmount] = useState(1);
  const amountChangeHandler = (event) => {
    setAmmount(event.target.value);
  };

  // get showId and openTicketBooking from store
  const dispatch = useDispatch();
  const { showId, openTicketBooking } = useSelector(
    (state) => state.ticketBooking
  );
  const closeTicketBooking = () => {
    dispatch(setOpenTicketBooking(false));
  };

  // get show details from store
  const { showDetails, loading } = useSelector((state) => state.showDetails);

  useEffect(() => {
    if (showId) {
      dispatch(getShowDetails({ showId: showId }));
    }

    dispatch(setErrorMsg(""));
    setAmmount(1);
    setTicketTypeChecked({
      id: "",
      price: 0,
    });
  }, [dispatch, showId, openTicketBooking]);

  return (
    <Portal
      visible={openTicketBooking}
      onClose={closeTicketBooking}
      containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
    >
      {loading ? (
        <Loader cssClass="h-12 w-12 border-4 mt-[150px]" loading={loading} />
      ) : (
        <div className="no-scrollbar relative max-h-[90vh] w-[60%] overflow-scroll rounded-xl bg-secondary p-5 text-primary">
          <RiCloseCircleLine
            onClick={closeTicketBooking}
            className="absolute right-3 top-3 z-50 text-3xl transition-all hover:scale-110 hover:cursor-pointer"
          />
          <div className="relative flex gap-x-3 border-b-4 border-dashed pb-5">
            <img
              src={showDetails.poster}
              alt="show img"
              className="w-1/3 rounded-lg object-cover"
            />
            <div className="flex flex-col justify-between gap-y-2 text-lg">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-3xl font-bold">{showDetails.title}</h2>
                <p className="font-medium">{showDetails.location}</p>
                <p className="italic opacity-70">{showDetails.date}</p>
                <p>{showDetails.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-x-2">
                {showDetails.ticketTypes?.map((ticketType) => (
                  <TicketTypeItem
                    key={ticketType._id}
                    ticketTypeInfo={ticketType}
                    setTicketTypeChecked={setTicketTypeChecked}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 h-4 w-8 -translate-x-[28px] translate-y-1/2 rotate-90 rounded-tl-[32px] rounded-tr-[32px] bg-primary"></div>
            <div className="absolute bottom-0 right-0 h-4 w-8 translate-x-[28px] translate-y-1/2 -rotate-90 rounded-tl-[32px] rounded-tr-[32px] bg-primary"></div>
          </div>
          <TicketBookingForm
            ticketTypeChecked={ticketTypeChecked}
            amountChangeHandler={amountChangeHandler}
            amount={amount}
            showId={showId}
            setOpenTicketBooking={setOpenTicketBooking}
          />
        </div>
      )}
    </Portal>
  );
};

export default TicketBooking;
