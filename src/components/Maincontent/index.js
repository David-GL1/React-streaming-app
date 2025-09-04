import React from "react";
import './MainContent.scss';
import Song from "../Song";
import {
  FiHeart,     // ❤️
  FiPlay,      // ▶️
  FiPause,     // ⏸️
  FiShuffle,   // 🔀
  FiDownload,  // ⬇️
  FiSearch,    // 🔍
  FiMenu,      // ☰
  FiClock,     // ⏰
  FiMinus      // ➖
} from 'react-icons/fi';


const MainContent = () => {
    return (
        <main className="main">
            <section className="main__banner">
                <article className="main__banner--playlistImgContainer">
                    <FiHeart  className="favoritesIcon"/>
                </article>

                <article className="main__banner--playlistInfoContainer">
                    <div className="main__banner--playlistTitleContainer" >
                        <h3 className="main__banner--playlistTtile">Playlist</h3>
                    </div>

                    <div className="main__banner--playlistNameContainer">
                        <h1 className="main__banner--playlistName"> Nombre de la playlist</h1>
                    </div>

                    <div className="main__banner--playlistInfoUserContainer">
                        <h4 className="main__banner--playlistInfoUser">Nombre del usuario activo</h4><span>Numero de canciones</span>
                    </div>
                </article>
            </section>


        <section className="backgroundContinuationBanner">
            <section className="main__audioContainer">
                <article className="main__audioContainer--userOptionsContainer">
                    <div className="main__audioContainer--iconReproduceContainer">  
                        <FiPlay className="reproduceIcon"/>                            
                    </div>
                    <FiShuffle className="icon" />
                    <FiDownload  className="icon"/>
                </article>
            
                <article className="main__audioContainer--searchFilterContainer">
                    <FiSearch className="icon" />
                    <label className="main__audioContainer--_addedDateLabel">Fecha en que se agrego<FiMenu/></label>
                </article>
            </section>

            <section className="main__sortOptionsContainer">
                <article className="main__sortOptionsContainer--btnsGroup">
                    <p className="main__sortOptionsContainer--numberSong">#</p>
                    <p className="main__sortOptionsContainer--titleSong">Titulo</p>
                    <p className="main__sortOptionsContainer--albumSong">Album</p>
                    <p className="main__sortOptionsContainer--durationSong"><FiClock/></p>
                </article>
            </section>

            <hr className="divider"></hr>

            <section className="main__playlistSongsContainer">
                
                <Song
                    numberSong="1"
                    imgAlbum="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
                    title="Shape of You"
                    artist="Ed Sheeran"
                    album="Divide"
                    duration="3:53"
                />

                <Song
                    numberSong="2"
                    imgAlbum="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
                    title="Blinding Lights"
                    artist="The Weeknd"
                    album="After Hours"
                    duration="3:20"
                />

                <Song
                    numberSong="3"
                    imgAlbum="https://cdn-images.dzcdn.net/images/cover/eede3cd0dc3a5a87c7a5b1085b022e2d/1900x1900-000000-80-0-0.jpg"
                    title="Viva La Vida"
                    artist="Coldplay"
                    album="Viva la Vida or Death and All His Friends"
                    duration="4:02"
                />
            </section>
        </section>
        </main>
    )
}

export default MainContent