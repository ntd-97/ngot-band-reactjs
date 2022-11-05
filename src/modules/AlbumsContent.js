import React from "react";

import { useSelector } from "react-redux";

import AlbumItem from "../components/AlbumItem";
import ContentWraper from "../components/ContentWraper";

const AlbumsContent = () => {
  const { albums } = useSelector((state) => state.commonInfo);

  return (
    <ContentWraper
      title={"Albums"}
      titleColor={"text-primary"}
      subTitle={"Nhạc chơi chúng tôi!"}
      bgColor={"bg-secondary"}
    >
      <div className="flex flex-col gap-y-10">
        {albums.map((album) => (
          <AlbumItem
            key={album._id}
            imgUrl={album.albumImgUrl}
            title={album.title}
            date={album.date}
            description={album.description}
            albumLink={album.linkToListen}
          />
        ))}
      </div>
    </ContentWraper>
  );
};

export default AlbumsContent;
