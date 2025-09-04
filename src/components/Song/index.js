import React, { Component } from "react";
import { FiPlay } from "react-icons/fi";
import './Song.scss';

class Song extends Component{
    render() {
        const { numberSong, imgAlbum, title, artist, album, duration} = this.props

        return(
            <article className="main__songContainer">
                <div className="main__songContainer--songNumberContainer">
                    <p className="main__songContainer--numberSong"> {numberSong} </p>
                    <FiPlay className="main__songContainer--iconPlay"/>
                </div>

                <div className="main__songContainer--aboutSongContainer">
                    <div className="main__songContainer--songImgContainer">   
                        <img className="main__songContainer--imgSong" src={imgAlbum} ></img>
                    </div>

                    <div className="main__songContainer--textContainer">
                        <h3 className="main__songContainer--titleSong"> {title} </h3>
                        <p className="main__songContainer--artist"> {artist} </p>
                    </div>
                </div>

                <div className="main__songContainer--albumNameContainer">
                    <p className="main__songContainer--albumName"> {album} </p>
                </div>

                <div className="main__songContainer--durationContainer">
                    <p className="main__songContainer--songDuration"> {duration} </p>
                </div>
            </article>
        )
    }
}

export default Song;


