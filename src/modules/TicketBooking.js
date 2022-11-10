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
  const [amount, setAmount] = useState(1);
  const amountChangeHandler = (event) => {
    if (event.target.value <= 3 && event.target.value >= 0) {
      setAmount(event.target.value);
    }
    event.preventDefault();
  };

  // get showId and openTicketBooking from store
  const dispatch = useDispatch();
  const { showId, openTicketBooking } = useSelector(
    (state) => state.ticketBooking
  );

  // get add ticket loading from store
  const { loading: ticketLoading } = useSelector((state) => state.ticket);

  const closeTicketBooking = () => {
    if (!ticketLoading) {
      dispatch(setOpenTicketBooking(false));
    }
  };

  // get show details from store
  const { showDetails, loading } = useSelector((state) => state.showDetails);

  useEffect(() => {
    if (showId) {
      dispatch(getShowDetails({ showId: showId }));
    }

    dispatch(setErrorMsg(""));
    setAmount(1);
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
        <div className="no-scrollbar relative max-h-[90vh] w-[95%] overflow-scroll rounded-xl bg-secondary p-5 text-primary xl:w-[80%] 2xl:w-[65%]">
          <RiCloseCircleLine
            onClick={closeTicketBooking}
            className="absolute right-3 top-3 z-50 rounded-full bg-secondary p-1 text-4xl transition-all hover:scale-110 hover:cursor-pointer lg:bg-transparent lg:p-0 lg:text-3xl"
          />
          <div className="relative grid grid-cols-1 gap-x-3 gap-y-4 border-b-4 border-dashed pb-5 lg:grid-cols-3">
            <img
              src={showDetails.poster}
              alt="show img"
              className="h-full rounded-lg object-cover lg:col-span-1"
            />
            <div className="flex flex-col justify-between gap-y-2 text-lg lg:col-span-2">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-3xl font-bold">{showDetails.title}</h2>
                <p className="font-medium">{showDetails.location}</p>
                <p className="italic opacity-70">{showDetails.date}</p>
                <p className="text-justify">{showDetails.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-x-2 gap-y-2 md:grid-cols-3">
                {showDetails.ticketTypes?.map((ticketType) => (
                  <TicketTypeItem
                    key={ticketType._id}
                    id={ticketType._id}
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
          />
        </div>
      )}
    </Portal>
  );
};

export default TicketBooking;
