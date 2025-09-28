import React from "react";
import Song from "../Song";
import "./SearchResults.scss";

const SearchResults = ({ songs, favorites, toggleFavorites, className }) => {
  return (
    <section className="searchResultsMainContainer">
      <h2 className="searchResultsMainContainer__title">
        Resultados de la busqueda
      </h2>

      <article className="searchResultsMainContainer__songsContainer">
        {songs.map((song, index) => (
          <Song
            id={song.id}
            numberSong={index + 1}
            albumCover={song.albumCover}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            toggleFavorites={toggleFavorites}
            isFavorite={favorites.some((fav) => fav.id === song.id)}
            className={className}
          />
        ))}
      </article>
    </section>
  );
};

export default SearchResults;
