import React from "react";

const MemberItem = ({ imgUrl, name }) => {
  return (
    <div>
      <img src={imgUrl} alt="member" className="mb-6 rounded-xl" />
      <p className="text-center text-xl font-medium">{name}</p>
    </div>
  );
};

export default MemberItem;
