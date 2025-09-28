import React from "react";
import "./PlayListContainer.scss";

const PlayListContainer = ({ imgCover }) => {
  return (
    <article className="asideLeft__playListContainer">
      <div className="asideLeft__playListContainer--imgContainer">
        <img
          src={imgCover}
          className="asideLeft__playListContainer--imgPlayList"
        />
      </div>
    </article>
  );
};

export default PlayListContainer;
