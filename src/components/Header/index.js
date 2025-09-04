import React from "react";
import './Header.scss';
import {    
  FiHome,     // 🏠
  FiSearch,   // 🔍
  FiDisc,     // 💿
  FiBell,     // 🔔
  FiUsers,    // 👥
  FiUser      // 👤
} from 'react-icons/fi';
import { FaSpotify } from 'react-icons/fa'; 


const Header = () => {
    return(
        <header className="header">
            
           <section className="header__leftSection">
                <article className="header__leftSection--logoContainer">
                     <FaSpotify className="logo" />
                </article>
           </section>

           <section className="header__centerSection">
                <article className="header__centerSection--homeContainer">
                    <a><FiHome  className="homeIcon"/></a>
                </article>

                <article className="header__centerSection--searchContainer">
                    <FiSearch className="icon"/>
                    <input  className="header__centerSection--searchInput" type="text" placeholder="Buscar canciones, artistas..."/>
                    <FiDisc className="icon"/>
                </article>
           </section>

           <section className="header__rightSection--userContainer">
                <FiBell className="icon"  />
                <FiUsers className="icon" />
                <FiUser className="icon"  />
           </section>
        </header>
    )
}

export default Header