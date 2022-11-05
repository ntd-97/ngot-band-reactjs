import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setOpenTicketBooking } from "../redux/slices/ticketBookingSlice";
import { getShowDetails } from "../redux/slices/showDetailsSlice";

import { RiCloseCircleLine } from "react-icons/ri";

import CustomButton from "../components/CustomButton";
import Portal from "../components/Portal";
import TicketTypeItem from "../components/TicketTypeItem";
import Loader from "../components/Loader";

const TicketBooking = () => {
  const ticketBooking = useRef();

  const dispatch = useDispatch();
  const { showId, openTicketBooking } = useSelector(
    (state) => state.ticketBooking
  );
  const { showDetails, loading } = useSelector((state) => state.showDetails);

  useEffect(() => {
    if (showId) {
      dispatch(getShowDetails({ showId: showId }));
    }
  }, [dispatch, showId]);

  return (
    <Portal
      visible={openTicketBooking}
      onClose={() => {
        dispatch(setOpenTicketBooking({ openTicketBooking: false }));
      }}
      containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
    >
      {loading ? (
        <Loader cssClass="h-12 w-12 border-4 mt-[150px]" loading={loading} />
      ) : (
        <div
          ref={ticketBooking}
          className="no-scrollbar relative max-h-[90vh] w-[60%] overflow-scroll rounded-xl bg-secondary p-5 text-primary"
        >
          <RiCloseCircleLine
            onClick={() => {
              dispatch(setOpenTicketBooking({ openTicketBooking: false }));
            }}
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
                    ticketTypeId={ticketType._id}
                    ticketTypeInfo={ticketType}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 h-4 w-8 -translate-x-[28px] translate-y-1/2 rotate-90 rounded-tl-[32px] rounded-tr-[32px] bg-primary"></div>
            <div className="absolute bottom-0 right-0 h-4 w-8 translate-x-[28px] translate-y-1/2 -rotate-90 rounded-tl-[32px] rounded-tr-[32px] bg-primary"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="mt-6 mb-2 text-center text-3xl font-bold">
              Thông tin vé
            </h2>

            <form
              action=""
              className="mt-3 flex flex-col items-center justify-center gap-x-3 text-lg"
            >
              <div className="grid w-full grid-cols-2 justify-between gap-y-2 gap-x-3">
                <div className="flex w-full flex-col">
                  <label className="mb-1 font-medium" htmlFor="fullName">
                    Họ và tên:
                  </label>
                  <input
                    className="rounded-lg border-2 border-primary p-2"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Tên"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <label className="mb-1 font-medium" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="rounded-lg border-2 border-primary p-2"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <label className="mb-1 font-medium" htmlFor="phone">
                    Số điện thoại:
                  </label>
                  <input
                    className="rounded-lg border-2 border-primary p-2"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <label className="mb-1 font-medium" htmlFor="password">
                    Password:
                  </label>
                  <input
                    className="rounded-lg border-2 border-primary p-2"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <label className="mb-1 font-medium" htmlFor="amount">
                    Số lượng vé:
                  </label>
                  <input
                    className="rounded-lg border-2 border-primary p-2"
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="0"
                    min={1}
                    max={3}
                  />
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-1 font-medium">Tổng tiền:</p>
                  <p className="rounded-lg border-2 border-contrast p-2 text-right font-bold">
                    1.200.000đ
                  </p>
                </div>
              </div>
              <CustomButton
                className={
                  "mt-3 w-full rounded-lg bg-primary p-3 text-secondary"
                }
              >
                Đặt vé
              </CustomButton>
            </form>
          </div>
        </div>
      )}
    </Portal>
  );
};

export default TicketBooking;
