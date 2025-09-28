import React from "react";
import "./QueueSong.scss";

const QueueSong = ({ albumCover, titleSong, artists }) => {
  return (
    <article className="playQueue__songContainer">
      <div className="playQueue__songContainer--aboutSongContainer">
        <div className="playQueue__songContainer--songImgContainer">
          <img
            className="playQueue__songContainer--imgSong"
            src={albumCover}
          ></img>
        </div>
        <div className="playQueue__songContainer--textContainer">
          <h3 className="playQueue__songContainer--titleSong">{titleSong}</h3>
          <p className="playQueue__songContainer--artist">{artists}</p>
        </div>
      </div>
    </article>
  );
};

export default QueueSong;
