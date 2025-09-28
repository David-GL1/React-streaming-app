import React, { useEffect, useState } from "react";
import "./MobileSearchResults.scss";
import Song from "../Maincontent/Song";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

const MobileSearchResults = ({
  songs,
  favorites,
  toggleFavorites,
  showMobileSearchResults,
  setMobileSearchResults,
}) => {


  const [isActive, setIsActive] = useState(false)

  useEffect(() =>{
    if(showMobileSearchResults){
      const timeout = setTimeout(() => setIsActive(true), 200)
      return () => clearTimeout(timeout)
    }else{
      setIsActive(false)
    }
  }, [showMobileSearchResults])

  return (
    <aside className={`mobileSearchResults ${showMobileSearchResults ? "active" : ""}`}>
      <section className="mobileSearchResults__topBar">
        <FiArrowLeft className="icon" onClick={() => setMobileSearchResults(false)} />
        <article className="mobileSearchResults__searchInputContainer">
          <FiSearch />
          <input
            type="text"
            className="mobileSearchResults__searchInput"
            placeholder="Buscar canciones, artistas..."
          />
        </article>
      </section>

      <h3 className="mobileSearchResults__title">Resultados de la búsqueda</h3>

      <section className="mobileSearchResults__songsContainer">
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
          />
        ))}
      </section>
    </aside>
  );
};

export default MobileSearchResults;
