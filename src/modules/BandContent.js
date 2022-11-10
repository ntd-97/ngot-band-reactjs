import React from "react";

import { useSelector } from "react-redux";

import ContentWraper from "../components/ContentWraper";
import MemberItem from "../components/MemberItem";

const BandContent = () => {
  const { members, description } = useSelector((state) => state.commonInfo);

  return (
    <ContentWraper
      title={"Ban nhạc Ngọt"}
      subTitle={"Nhạc chúng tôi chơi!"}
      titleColor={"text-primary"}
      bgColor={"bg-secondary"}
      id={"band"}
    >
      <p className="mb-[38px] text-justify indent-8 text-lg leading-8 md:text-xl">
        {description}
      </p>
      <div className="grid grid-cols-2 gap-x-3 gap-y-3 lg:grid-cols-4">
        {members.map((member) => (
          <MemberItem
            key={member._id}
            name={member.name}
            imgUrl={member.memberImgUrl}
          />
        ))}
      </div>
    </ContentWraper>
  );
};

export default BandContent;
