import React, { Component } from 'react';
import Header from './components/Header';
import MainContent from './components/Maincontent';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import PlayerBar from './components/PlayerBar';
import './App.scss';

class App extends Component {

  componentDidMount(){
    console.log("La aplicacion se ha cargado correctamente")
  }

  render() { 
    return(  
    <div className="layout">
      <Header />

      {/* Cuerpo dividido en 3 columnas */}
      <div className="app-body">
        <SidebarLeft />
        <MainContent />
        <SidebarRight />
      </div>

      <PlayerBar/>
    </div>
    )
  };
}

export default App;
