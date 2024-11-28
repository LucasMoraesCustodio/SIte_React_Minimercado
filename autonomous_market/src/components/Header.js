import React from 'react';
import './header.css';

const Header = ({ companyName }) => {
    return (
      <header>
        <a href="/">
          <img src="https://via.placeholder.com/200x100" alt="Logo empresa" />
        </a>
        <a href="/">
          <h1>{companyName}</h1>
        </a>
        <a href="/perfil">
          <img src="https://cdn.pixabay.com/photo/2020/04/09/19/59/man-5022931_1280.jpg" alt="Perfil" className="rounded-image"/>
        </a>
      </header>
    );
};

export default Header;