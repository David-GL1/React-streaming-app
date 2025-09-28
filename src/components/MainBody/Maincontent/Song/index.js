import React from "react";
import { FiPlay, FiPlusCircle } from "react-icons/fi";
import "./Song.scss";

const Song = ({
  id,
  numberSong,
  albumCover,
  title,
  artist,
  album,
  duration,
  toggleFavorites,
  isFavorite,
  className = ""
}) => {
  return (
    <article className="main__songContainer">
      <div className="main__songContainer--songNumberContainer">
        <p className="main__songContainer--numberSong"> {numberSong} </p>
        <FiPlay className="main__songContainer--iconPlay" />
      </div>

      <div className="main__songContainer--aboutSongContainer">
        <div className="main__songContainer--songImgContainer">
          <img className="main__songContainer--imgSong" src={albumCover}></img>
        </div>

        <div className="main__songContainer--textContainer">
          <h3 className={`main__songContainer--titleSong ${className}`}> {title} </h3>
          <p className={`main__songContainer--artist ${className}`}> {artist} </p>
        </div>
      </div>

      <div className="main__songContainer--albumNameContainer">
        <p className={`main__songContainer--albumName ${className}`}>{album}</p>
      </div>

      <div className="main__songContainer--durationContainer">
        <FiPlusCircle 
        className={`addToFavorites ${isFavorite ? "favorite" : ""}`}
        onClick={() => toggleFavorites({
          id,
          numberSong,
          title,
          artist,
          album,
          albumCover,
          duration
        })} 
        />
        <p className="main__songContainer--songDuration"> {duration} </p>
      </div>
    </article>
  );
};

export default Song;
