import React from 'react';
import PlayQueue from './PlayQueue';
import InfoSong from './InfoSong';
import './SidebarRight.scss';


const SidebarRight = () => {
  return (
    <aside className="sidebarRight">
      <InfoSong />
    </aside>
  );
};

export default SidebarRight;