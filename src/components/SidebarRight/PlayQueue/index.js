import React from "react";
import {
  FiX, // ❌
} from "react-icons/fi";
import "./PlayQueue.scss";
import QueueSong from "./QueueSong";

const PlayQueue = () => {
  return (
    <aside>
      <section className="playQueue">
        <article className="playQueue__queueAndHistoryContainer">
          <p className="playQueue__queueAndHistoryContainer--playQueue">
            Fila de reproduccion
          </p>
          <p className="playQueue__queueAndHistoryContainer--playBackHistory">
            Escuchado recientemente
          </p>
          <FiX className="icon" />
        </article>

        <p className="playQueue__infoText">Estas reproduciendo</p>

        <QueueSong
          imgAlbum="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
          titleSong="Shape of you"
          artists="Ed Sheeran"
        />

        <p className="playQueue__infoText">Siguiente de tu Playlist</p>

        <QueueSong
          imgAlbum="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
          titleSong="Shape of you"
          artists="Ed Sheeran"
        />

        <QueueSong
          imgAlbum="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
          titleSong="Shape of you"
          artists="Ed Sheeran"
        />

        <QueueSong
          imgAlbum="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
          titleSong="Shape of you"
          artists="Ed Sheeran"
        />

        <QueueSong
          imgAlbum="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
          titleSong="Shape of you"
          artists="Ed Sheeran"
        />
      </section>
    </aside>
  );
};

export default PlayQueue;
