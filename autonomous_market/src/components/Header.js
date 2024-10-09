import React from 'react';
import './header.css';

const Header = () => {
    return (
      <header>
        <img src="https://via.placeholder.com/200x100" alt="Logo empresa" />
        <h1>Nome da Empresa</h1>
        <img src="https://via.placeholder.com/100x100" alt="Perfil" className="rounded-image"/>
      </header>
    );
  };

  export default Header