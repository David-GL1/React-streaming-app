import React from "react";
import {
  FiMoreHorizontal, // ⋯
  FiMaximize, // 🔳
  FiPlay, // ▶️
  FiShare2, // 🔗
  FiHeart, // ❤️
} from "react-icons/fi";
import "./NowPlayingInfo.scss";

const NowPlayingInfo = ({
  mediaType,
  songCover,
  nameSong,
  artist,
  artistCover,
  numberOfFans,
  artistDescription,
}) => {
  return (
    <>
      <section className="infoSong">
        <h3 className="infoSong__FavoritesTitle">{mediaType}</h3>
        <article className="infoSong__moreOptionsContainer">
          <FiMoreHorizontal className="icon" />
          <FiMaximize className="icon" />
        </article>
      </section>

      <section className="aboutSongContainer">
        <article className="aboutSongContainer__songCoverContainer">
          <img className="aboutsongContainer__songCover" src={songCover}></img>
        </article>

        <article className="aboutSongContainer__infoContainer">
          <div className="aboutSongContainer__infoContainer--nameAndArtist">
            <h3 className="aboutSongContainer__infoContainer--nameSong">
              {nameSong}
            </h3>
            <p className="aboutSongContainer__infoContainer--nameArtist">
              {artist}
            </p>
          </div>

          <div className="aboutSongContainer__infoContainer--shareAndFavorites">
            <FiShare2 className="icon" />
            <FiHeart className="icon" />
          </div>
        </article>
      </section>

      <section className="aboutArtitsContainer">
        <article className="aboutArtitsContainer__imgArtistContainer">
          <img
            className="aboutArtitsContainer__imgArtistContainer--img"
            src={artistCover}
          ></img>

          <div className="aboutArtitsContainer__imgArtistContainer--textContainer">
            <h3 className="aboutArtitsContainer__imgArtistContainer--text">
              Acerca del artista
            </h3>
          </div>
        </article>

        <article className="aboutArtitsContainer__dataArtist">
          <h3 className="aboutArtitsContainer__dataArtist--nameArtist">
            {artist}
          </h3>

          <div className="aboutArtitsContainer__dataArtist--fansContainer">
            <div className="aboutArtitsContainer__dataArtist--numberFansContainer">
              <p className="aboutArtitsContainer__dataArtist--numberFans">
                Numero de fans:
              </p>
              <p className="aboutArtitsContainer__dataArtist--numberFans">
                {numberOfFans}
              </p>
            </div>
            <button className="aboutArtitsContainer__dataArtist--followBtn">
              Seguir
            </button>
          </div>

          <div lassName="aboutArtitsContainer__dataArtist--artist'sDescription">
            <p className="aboutArtitsContainer__dataArtist--text">
              {artistDescription}
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default NowPlayingInfo;
