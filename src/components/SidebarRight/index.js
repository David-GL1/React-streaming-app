import React, { useState } from "react";
import PlayQueue from "./PlayQueue";
import NowPlayingInfo from "./NowPlayingInfo";
import "./SidebarRight.scss";

const SidebarRight = ({ activePanel, className}) => {

  return (
    <aside className={`sidebarRight ${className}`}>
      {activePanel === "nowPlaying" && (
        <NowPlayingInfo
        mediaType="PlayList"
        songCover="https://cdn-images.dzcdn.net/images/cover/eede3cd0dc3a5a87c7a5b1085b022e2d/1900x1900-000000-80-0-0.jpg"
        nameSong="Viva la Vida"
        artist="Coldplay"
        artistCover="https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb"
        numberOfFans="100,000,000"
        artistDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta enim at urna semper, ut molestie nibh fringilla. Aliquam nisi purus, aliquam id vulputate eget, finibus vitae leo. Mauris porttitor dictum arcu id tincidunt. Aliquam malesuada eros ut magna dapibus dictum. Nam sit amet sem nec nunc porta elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel sagittis leo, quis pulvinar nunc. Aliquam urna nunc, semper non condimentum non, cursus non lacus. Sed sollicitudin, risus ac ultricies egestas, nulla est eleifend turpis, ut pulvinar lectus ipsum eget sem. Praesent rhoncus mattis urna, eu efficitur ipsum gravida sit amet. Duis facilisis felis sagittis dolor luctus volutpat. Etiam porttitor consectetur erat tristique faucibus. Ut nec libero in justo venenatis tempor. Cras vitae magna porta, ullamcorper mi a, porttitor risus. Aliquam sit amet vestibulum turpis, nec accumsan metus. Pellentesque interdum in ex sed malesuada."
        />
      )}

       {activePanel === "playQueue" && (
        <PlayQueue/>
      )}
    </aside>
  );
};

export default SidebarRight;
