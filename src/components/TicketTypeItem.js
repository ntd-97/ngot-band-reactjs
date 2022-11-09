import React from "react";

const TicketTypeItem = ({ ticketTypeInfo, setTicketTypeChecked, id }) => {
  return (
    <div className="flex flex-col rounded-lg border-2 border-primary p-2">
      <div className="flex items-center justify-between border-b-2 pb-2">
        <label htmlFor={id} className="text-xl font-bold">
          {`${ticketTypeInfo.type} - ${ticketTypeInfo.amount}`}
        </label>
        <input
          type="radio"
          id={id}
          name="ticketType"
          className="h-4 w-4 accent-contrast"
          onChange={(event) => {
            setTicketTypeChecked({
              id: ticketTypeInfo._id,
              price: ticketTypeInfo.price,
            });
          }}
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
