import React from "react";
import "./NowPlayingBar.scss";

const NowPLayingBar = ({ albumCover, titleSong, artist }) => {
  return (
    <article className="nowPLayingBar">
      <div className="nowPLayingBar__containerImg">
        <img
          className="nowPLayingBar__containerImg--img"
          src={albumCover}
        ></img>
      </div>

      <div className="nowPLayingBar__aboutSongContainer">
        <h3 className="nowPLayingBar__aboutSongContainer--titleSong">
          {titleSong}
        </h3>
        <p className="nowPLayingBar__aboutSongContainer--artist">{artist}</p>
      </div>
    </article>
  );
};

export default NowPLayingBar;
