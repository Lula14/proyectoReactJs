
import logo from './logo.svg';
import './App.css';
import React from 'react';
import AvatarJsx from './componentes/NavbarJsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenidos a Tijuana
        </p>
     {React.createElement('h2', {}, 'PET SHOP ONLINE')}
     <AvatarJsx />
      </header>
    </div>
  );
}

export default App; 
