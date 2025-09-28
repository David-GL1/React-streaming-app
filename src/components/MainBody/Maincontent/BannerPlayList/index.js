import React from "react";
import "./BannerPlayList.scss";
import {
  FiHeart, // ❤️
} from "react-icons/fi";

const BannerPLayList = ({
  mediaType,
  playListName,
  activeUser,
  numberOfSongs,
}) => {
  return (
    <section className="main__banner">
      <article className="main__banner--playlistImgContainer">
        <FiHeart className="favoritesIcon" />
      </article>

      <article className="main__banner--playlistInfoContainer">
        <div className="main__banner--playlistTitleContainer">
          <h3 className="main__banner--playlistTtile">{mediaType}</h3>
        </div>

        <div className="main__banner--playlistNameContainer">
          <h1 className="main__banner--playlistName">{playListName}</h1>
        </div>

        <div className="main__banner--playlistInfoUserContainer">
          <h4 className="main__banner--playlistInfoUser">{activeUser}</h4>
          <span>{numberOfSongs}</span>
        </div>
      </article>
    </section>
  );
};

export default BannerPLayList;
