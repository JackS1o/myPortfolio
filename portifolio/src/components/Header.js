import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav1">
      <Link to="/">Início</Link>
      </nav>
      <nav className="nav2">
        <Link to="/about">Sobre Mim</Link>
      </nav>
      <nav
        className="nav3"
      >
        <Link to="/projects">Projetos</Link>
      </nav>
      <nav className="nav4">
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
