import React from "react";
import "./SideBarLeft.scss";
import PlayListContainer from "./PlayListContainer";
import {
  FiBookOpen, // 📖
  FiPlus, // ➕
  FiHeart, // ❤️
  FiBookmark, // 🔖
} from "react-icons/fi";

const SidebarLeft = () => {
  return (
    <aside className="asideLeft">
      <section className="asideLeft__userContainer">
        <FiBookOpen className="icon" />

        <article className="asideLeft__userContainer--optionsPlayList">
          <FiPlus className="icon" />
        </article>
      </section>

      <section className="asideLeft__songsGrid">
        <PlayListContainer imgCover="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" />

        <PlayListContainer imgCover="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" />

        <PlayListContainer imgCover="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" />

        <PlayListContainer imgCover="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" />

        <PlayListContainer imgCover="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" />

        <PlayListContainer imgCover="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" />
      </section>
    </aside>
  );
};

export default SidebarLeft;
