import React from "react";

import PropTypes from "prop-types";

const TicketItem = ({
  imgUrl,
  title,
  location,
  date,
  ticketType,
  amount,
  userName,
  createdDate,
  email,
  phone,
  price,
}) => {
  return (
    <div className="rounded-xl bg-secondary p-3">
      <div className="relative flex gap-x-3 border-b-4 border-dashed pb-3">
        <img
          src={imgUrl}
          alt="show img"
          className="w-1/2 rounded-lg object-cover md:w-1/3"
        />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="font-medium">{location}</p>
          <p className="italic opacity-70">{date}</p>
        </div>
        <div className="absolute bottom-0 h-4 w-8 -translate-x-[25px] translate-y-1/2 rotate-90 rounded-tl-[32px] rounded-tr-[32px] bg-primary"></div>
        <div className="absolute bottom-0 right-0 h-4 w-8 translate-x-[25px] translate-y-1/2 -rotate-90 rounded-tl-[32px] rounded-tr-[32px] bg-primary"></div>
      </div>
      <div className="pt-2">
        <div className="mb-3 flex flex-wrap items-center justify-between">
          <p className="pr-2 text-xl font-bold">{userName}</p>
          <p className="font-medium">
            {email} - ({phone})
          </p>
        </div>
        <div className="flex flex-col gap-y-[2px]">
          <p>
            <span className="text-[17px] font-medium">Ngày mua vé:</span>{" "}
            <span className="italic opacity-70"> {createdDate}</span>
          </p>
          <p>
            <span className="text-[17px] font-medium">Loại vé:</span>{" "}
            <span className="font-bold"> {ticketType.type}</span>
          </p>
          <p>
            <span className="text-[17px] font-medium">Mô tả:</span>{" "}
            <span> {ticketType.description}</span>
          </p>
          <p>
            <span className="text-[17px] font-medium">Số lượng:</span>{" "}
            <span> {amount}</span>
          </p>
          <p>
            <span className="text-[17px] font-medium">Tổng tiền:</span>{" "}
            <span className="font-bold">
              {" "}
              {new Intl.NumberFormat("vi-VN").format(price * amount)}đ
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

TicketItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  ticketType: PropTypes.object,
  amount: PropTypes.number,
  userName: PropTypes.string,
  createdDate: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  price: PropTypes.number,
};

export default TicketItem;
