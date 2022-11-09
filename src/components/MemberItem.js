import React from "react";

const MemberItem = ({ imgUrl, name }) => {
  return (
    <div>
      <img src={imgUrl} alt="member" className=" mb-4 rounded-xl md:mb-6" />
      <p className="text-center text-lg font-medium md:text-xl">{name}</p>
    </div>
  );
};

export default MemberItem;
