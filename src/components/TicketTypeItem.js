import React from "react";

const TicketTypeItem = ({ ticketTypeInfo }) => {
  return (
    <div className="flex flex-col rounded-lg border-2 border-primary p-2">
      <div className="flex items-center justify-between border-b-2 pb-2">
        <h3 className="text-xl font-bold">
          {`${ticketTypeInfo.type} - ${ticketTypeInfo.amount}`}
        </h3>
        <input
          type="radio"
          id="ticketType"
          name="ticketType"
          className="h-4 w-4 accent-contrast"
        />
      </div>
      <p className="py-2">{ticketTypeInfo.description}</p>
      <p className="border-t-2 pt-2 font-medium">
        <span className="font-bold">Giá:</span>{" "}
        {new Intl.NumberFormat("vi-VN").format(ticketTypeInfo.price)}
        đ/vé
      </p>
    </div>
  );
};

export default TicketTypeItem;
