import React from "react";
import './SideBarLeft.scss'; 
import {
  FiBookOpen,   // 📖
  FiPlus,       // ➕
  FiHeart,      // ❤️
  FiBookmark    // 🔖
} from 'react-icons/fi'

const SidebarLeft = () => {
    return (
        <aside className="asideLeft">

            <section className="asideLeft__userContainer">
                <FiBookOpen className="icon"/>
                
                <article className="asideLeft__userContainer--optionsPlayList">
                    <FiPlus className="icon"/>
                </article>
            </section>

            <section className="asideLeft__songsGrid">
                
                <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                 <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                 <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                 <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                 <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                 <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>

                 <article className="asideLeft__playListContainer">
                    <div className="asideLeft__playListContainer--imgContainer" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJHqRRJs3WWQfZGKQBbJ9qzbCFHQXlJf2g&s" className="asideLeft__playListContainer--imgPlayList"/>
                    </div>

                    <div className="asideLeft__playListContainer--playListInfo">
                        <h3 className="asideLeft__playListContainer--titlePlayList">Nombre de la  Playlist</h3>
                        <p className="asideLeft__playListContainer--descriptionPlayList">Descripción breve o nombre del creador</p>
                    </div>
                </article>
            </section>   
        </aside>
    )
}

export default SidebarLeft