import React from "react";
import { FiX // ❌  
} from 'react-icons/fi';
import './PlayQueue.scss';

const PlayQueue = () => {
    return (
        <aside>
            <section className="playQueue">
                <article className="playQueue__queueAndHistoryContainer">
                    <p className="playQueue__queueAndHistoryContainer--playQueue">Fila de reproduccion</p>
                    <p className="playQueue__queueAndHistoryContainer--playBackHistory">Escuchado recientemente</p>
                    <FiX  className="icon"/>
                </article>

                <p className="playQueue__infoText">Estas reproduciendo</p>

                <article className="playQueue__songContainer">
                    <div className="playQueue__songContainer--aboutSongContainer">
                        <div className="playQueue__songContainer--songImgContainer">   
                            <img className="playQueue__songContainer--imgSong"></img>
                        </div>
                       <div className="playQueue__songContainer--textContainer">
                            <h3 className="playQueue__songContainer--titleSong">Titulo de la cancion</h3>
                            <p className="playQueue__songContainer--artist">Artistas</p>
                        </div>
                    </div>
                </article>
                
                <p  className="playQueue__infoText">Siguiente de tu Playlist</p>

                 <article className="playQueue__songContainer">
                    <div className="playQueue__songContainer--aboutSongContainer">
                        <div className="playQueue__songContainer--songImgContainer">   
                            <img className="playQueue__songContainer--imgSong"></img>
                        </div>
                       <div className="playQueue__songContainer--textContainer">
                            <h3 className="playQueue__songContainer--titleSong">Titulo de la cancion</h3>
                            <p className="playQueue__songContainer--artist">Artistas</p>
                        </div>
                    </div>
                </article>

                 <article className="playQueue__songContainer">
                    <div className="playQueue__songContainer--aboutSongContainer">
                        <div className="playQueue__songContainer--songImgContainer">   
                            <img className="playQueue__songContainer--imgSong"></img>
                        </div>
                       <div className="playQueue__songContainer--textContainer">
                            <h3 className="playQueue__songContainer--titleSong">Titulo de la cancion</h3>
                            <p className="playQueue__songContainer--artist">Artistas</p>
                        </div>
                    </div>
                </article>

                 <article className="playQueue__songContainer">
                    <div className="playQueue__songContainer--aboutSongContainer">
                        <div className="playQueue__songContainer--songImgContainer">   
                            <img className="playQueue__songContainer--imgSong"></img>
                        </div>
                       <div className="playQueue__songContainer--textContainer">
                            <h3 className="playQueue__songContainer--titleSong">Titulo de la cancion</h3>
                            <p className="playQueue__songContainer--artist">Artistas</p>
                        </div>
                    </div>
                </article>

                 <article className="playQueue__songContainer">
                    <div className="playQueue__songContainer--aboutSongContainer">
                        <div className="playQueue__songContainer--songImgContainer">   
                            <img className="playQueue__songContainer--imgSong"></img>
                        </div>
                       <div className="playQueue__songContainer--textContainer">
                            <h3 className="playQueue__songContainer--titleSong">Titulo de la cancion</h3>
                            <p className="playQueue__songContainer--artist">Artistas</p>
                        </div>
                    </div>
                </article>

                 <article className="playQueue__songContainer">
                    <div className="playQueue__songContainer--aboutSongContainer">
                        <div className="playQueue__songContainer--songImgContainer">   
                            <img className="playQueue__songContainer--imgSong"></img>
                        </div>
                       <div className="playQueue__songContainer--textContainer">
                            <h3 className="playQueue__songContainer--titleSong">Titulo de la cancion</h3>
                            <p className="playQueue__songContainer--artist">Artistas</p>
                        </div>
                    </div>
                </article>

                 <article className="playQueue__songContainer">
                    <div className="playQueue__songContainer--aboutSongContainer">
                        <div className="playQueue__songContainer--songImgContainer">   
                            <img className="playQueue__songContainer--imgSong"></img>
                        </div>
                       <div className="playQueue__songContainer--textContainer">
                            <h3 className="playQueue__songContainer--titleSong">Titulo de la cancion</h3>
                            <p className="playQueue__songContainer--artist">Artistas</p>
                        </div>
                    </div>
                </article>
            </section>
        </aside>
    )
}

export default PlayQueue