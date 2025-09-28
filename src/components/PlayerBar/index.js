import React, { useState } from "react";
import "./PlayerBar.scss";
import NowPLayingBar from "../NowPlayingBar";
import {
  FiShuffle, // 🔀
  FiSkipBack, // ⏮️
  FiPlay, // ▶️
  FiSkipForward, // ⏭️
  FiRepeat, // 🔁
  FiMic, // 🎤
  FiList, // 📋
  FiSmartphone, // 📱
  FiVolume2, // 🔊
  FiMinimize, // 🔽
  FiMaximize, // 🔼
  FiHeart, // ❤️
  FiHome, // 🏠
  FiSearch, // 🔍
  FiBook, // 📖
  FiPlus, // ➕
} from "react-icons/fi";

const PlayerBar = ({
  setMobileSearchResults,
  onNowPlayingClick,
  onPlayQueueClick,
}) => {
  return (
    <>
      <section className="playerBar">
        <NowPLayingBar
          albumCover="https://cdn-images.dzcdn.net/images/cover/eede3cd0dc3a5a87c7a5b1085b022e2d/1900x1900-000000-80-0-0.jpg"
          titleSong="Viva la Vida"
          artist="Coldplay"
        />

        <article className="playerBar__playerControlsContainer">
          <div className="playerBar_playerControlsContainer--iconsContainer">
            <FiShuffle className="icon " />
            <FiSkipBack className="icon " />
            <div className="reproduceIconPlayerBarContainer">
              <FiPlay className="reproduceIconPlayerBar" />
            </div>
            <FiSkipForward className="icon " />
            <FiRepeat className="icon " />
          </div>
          <div className="playerBar_playerControlsContainer--progressBarContainer">
            <span className="playerBar_playerControlsContainer--progressBarTextTime">
              1:00
            </span>
            <input
              className="playerBar_playerControlsContainer--progressBar"
              type="range"
              min="0"
              max="100"
              value="30"
            ></input>
            <span className="playerBar_playerControlsContainer--progressBarTextTime">
              1:00
            </span>
          </div>
        </article>

        <article className="playerBar__nowPlayingControls">
          <div className="playerBar__nowPlayingControls--iconsContainer">
            <FiPlay className="icon" onClick={onNowPlayingClick} />
            <FiMic className="icon " />
            <FiList className="icon" onClick={onPlayQueueClick} />
            <FiSmartphone className="icon " />
            <FiVolume2 className="icon " />
            <input
              className="playerBar__nowPlayingControls--volumeBar"
              type="range"
              min="0"
              max="100"
              value="30"
            ></input>
            <FiMinimize className="icon " />
            <FiMaximize className="icon " />
          </div>
        </article>
      </section>

      {/* Barra mobile de reproduccion */}

      <section className="mobilePlayerBar">
        <article className="mobilePlayerBar__mainContainerInfoSong">
          <div className="mobilePlayerBar__mainContainerInfoSong--containerImg">
            <img className="mobilePlayerBar__mainContainerInfoSong--img"></img>
          </div>

          <div className="mobilePlayerBar__mainContainerInfoSong--aboutSongContainer">
            <h3 className="mobilePlayerBar__mainContainerInfoSong--titleSong">
              Titulo de la cancion
            </h3>
            <p className="mobilePlayerBar__mainContainerInfoSong--artist">
              Nombres de artistas
            </p>
          </div>
        </article>

        <article className="mobilePlayerBar__songActions">
          <FiSmartphone className="iconMobile" />
          <FiHeart className="iconMobile" />
          <FiPlay className="iconMobile" />
        </article>
      </section>

      {/* Barra de navegacion mobile */}

      <section className="mobileNavBar">
        <article className="mobileNavBar__item">
          <FiHome className="iconMobile" />
          <p className="mobileNavBar__item--text">Inicio</p>
        </article>

        <article
          className="mobileNavBar__item"
          onClick={() => setMobileSearchResults(true)}
        >
          <FiSearch className="iconMobile" />
          <p className="mobileNavBar__item--text">Buscar</p>
        </article>

        <article className="mobileNavBar__item">
          <FiBook className="iconMobile" />
          <p className="mobileNavBar__item--text">Tu biblioteca</p>
        </article>

        <article className="mobileNavBar__item">
          <FiPlus className="iconMobile" />
          <p className="mobileNavBar__item--text">Crear</p>
        </article>
      </section>
    </>
  );
};

export default PlayerBar;
