import React, { useState } from "react";

import { BsCheckLg } from "react-icons/bs";

const TicketTypeItem = ({ TicketTypeId }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col rounded-lg border-2 border-primary p-2">
      <div className="flex items-center justify-between border-b-2 pb-2">
        <h3 className="text-xl font-bold">
          {"VIP"}
          {" - 100"}
        </h3>
        <input
          type="checkbox"
          id={TicketTypeId}
          name={TicketTypeId}
          className="hidden"
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
          checked={checked}
        />
        <label
          htmlFor={TicketTypeId}
          className={`${
            checked ? "bg-contrast" : "bg-gray-300"
          } flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded transition-all`}
        >
          <BsCheckLg
            className={`text-xs ${
              checked ? "opacity-100" : "opacity-0"
            } z-50 text-secondary transition-all`}
          />
        </label>
      </div>
      <p className="py-2">Vị trí phải sân khấu,không bao gồm nước và poster</p>
      <p className="border-t-2 pt-2 font-medium">
        <span className="font-bold">Giá:</span> 600.000đ/vé
      </p>
    </div>
  );
};

export default TicketTypeItem;
