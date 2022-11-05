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
    >
      <p className="mb-[38px] text-justify indent-8 text-xl leading-8">
        {description}
      </p>
      <div className="grid gap-x-3 lg:grid-cols-4">
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
