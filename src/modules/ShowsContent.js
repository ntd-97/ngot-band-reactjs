import React from "react";
import { useSelector } from "react-redux";

import ContentWraper from "../components/ContentWraper";
import ShowItem from "../components/ShowItem";

const ShowsContent = () => {
  const { shows } = useSelector((state) => state.commonInfo);

  return (
    <ContentWraper
      title={"Shows"}
      subTitle={"Tôi chơi chúng, Nhạc!"}
      titleColor="text-secondary"
      bgColor={"bg-primary"}
      id={"shows"}
    >
      <div className="grid-row grid gap-x-3 lg:grid-cols-4">
        {shows?.map((show) => (
          <ShowItem
            key={show._id}
            title={show.title}
            imgUrl={show.poster}
            date={show.date}
            description={show.description}
            amount={show.amount}
            location={show.location}
          />
        ))}
      </div>
    </ContentWraper>
  );
};

export default ShowsContent;
