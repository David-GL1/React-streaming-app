import React, { useEffect, useState } from "react";
import MainContent from "./Maincontent";
import SearchResults from "./Maincontent/SearchResults";
import "./MainBody.scss";
import MobileSearchResults from "./MobileSearchResults";

const MainBody = ({
  searchText,
  songs,
  showMobileSearchResults,
  setMobileSearchResults,
  className,
}) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (song) => {
    setFavorites((prev) => {
      const exist = prev.some((fav) => fav.id === song.id);

      if (exist) {
        return prev.filter((fav) => fav.id !== song.id);
      } else {
        return [...prev, song];
      }
    });
  };

  useEffect(()=> {
    console.log("Se ha agrego o elimino una cancion de la lista de favoritos del usuario")
  }, [favorites])

  return (
    <main className={`main ${className}`}>
      {showMobileSearchResults ? (
        <MobileSearchResults
          songs={songs}
          favorites={favorites}
          toggleFavorites={toggleFavorites}
          showMobileSearchResults={showMobileSearchResults}
          setMobileSearchResults={setMobileSearchResults}
        />
      ) : searchText ? (
        <SearchResults
          songs={songs}
          favorites={favorites}
          toggleFavorites={toggleFavorites}
          className={className}
        />
      ) : (
        <MainContent
          favorites={favorites}
          toggleFavorites={toggleFavorites}
          className={className}
        />
      )}
    </main>
  );
};

export default MainBody;
