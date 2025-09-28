import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import PlayerBar from "./components/PlayerBar";
import { songs } from "./components/Api/data";
import "./App.scss";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [showMobileSearchResults, setMobileSearchResults] = useState(false);

  const [activePanel, setActivePanel] = useState("none");

  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNowPlayingClick = () => {
    setActivePanel((prev) => (prev === "nowPlaying" ? "none" : "nowPlaying"));
  };

  const handlePlayQueueClick = () => {
    setActivePanel((prev) => (prev === "playQueue" ? "none" : "playQueue"));
  };

  return (
    <div className="layout">
      <Header searchText={searchText} setSearchText={setSearchText} />

      {/* Cuerpo dividido en 3 columnas */}
      <div className="app-body">
        <SidebarLeft />
        
        <MainBody
          searchText={searchText}
          songs={songs}
          showMobileSearchResults={showMobileSearchResults}
          setMobileSearchResults={setMobileSearchResults}
          className={isLaptop && activePanel === "none" ? "twoColumns" : ""}
        />
        
        {activePanel !== "none" && <SidebarRight activePanel={activePanel} />}
      </div>

      <PlayerBar
        setMobileSearchResults={setMobileSearchResults}
        onNowPlayingClick={handleNowPlayingClick}
        onPlayQueueClick={handlePlayQueueClick}
      />
    </div>
  );
};

export default App;
