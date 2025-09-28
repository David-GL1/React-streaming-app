import React from "react";
import "./MainContent.scss";
import Song from "./Song";
import BannerPLayList from "./BannerPlayList";
import Message from "../../Message";
import {
  FiPlay, // ▶️
  FiPause, // ⏸️
  FiShuffle, // 🔀
  FiDownload, // ⬇️
  FiSearch, // 🔍
  FiMenu, // ☰
  FiClock, // ⏰
  FiMinus, // ➖
  FiHeart,
} from "react-icons/fi";

const MainContent = ({ favorites, toggleFavorites, className }) => {
  return (
    <>
      <BannerPLayList
        mediaType="Playlist"
        playListName="Tus me gusta"
        activeUser="Usuario activo"
        numberOfSongs={`Canciones agregadas: ${favorites.length}`}
      />

      <section className="backgroundContinuationBanner">
        {favorites.length > 0 && (
          <>
            <section className="main__audioContainer">
              <article className="main__audioContainer--userOptionsContainer">
                <div className="main__audioContainer--iconReproduceContainer">
                  <FiPlay className="reproduceIcon" />
                </div>
                <FiShuffle className="icon" />
                <FiDownload className="icon" />
              </article>

              <article className="main__audioContainer--searchFilterContainer">
                <FiSearch className="icon" />
                <label className="main__audioContainer--_addedDateLabel">
                  Fecha en que se agrego
                  <FiMenu />
                </label>
              </article>
            </section>

            <section className="main__sortOptionsContainer">
              <article className="main__sortOptionsContainer--btnsGroup">
                <p className="main__sortOptionsContainer--numberSong">#</p>
                <p className="main__sortOptionsContainer--titleSong">Titulo</p>
                <p className="main__sortOptionsContainer--albumSong">Album</p>
                <p className="main__sortOptionsContainer--durationSong">
                  <FiClock />
                </p>
              </article>
            </section>

            <hr className={`divider ${className}`}></hr>
          </>
        )}

        <section className="main__playlistSongsContainer">
          {favorites.length === 0 ? (
            <Message
              icon={<FiHeart />}
              title="No tienes canciones agregadas"
              description="Busca canciones y añádelas a tus me gusta."
            />
          ) : (
            favorites.map((songFavorites, index) => (
              <Song
                key={songFavorites.id}
                id={songFavorites.id}
                numberSong={index + 1}
                albumCover={songFavorites.albumCover}
                title={songFavorites.title}
                artist={songFavorites.artist}
                album={songFavorites.album}
                duration={songFavorites.duration}
                toggleFavorites={toggleFavorites}
                isFavorite = {favorites.some(fav => fav.id === songFavorites.id)}
                className={className}
              />
            ))
          )}
        </section>
      </section>
    </>
  );
};

export default MainContent;
