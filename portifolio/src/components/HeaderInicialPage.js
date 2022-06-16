import React from "react";
import { Link } from 'react-router-dom';

function HeaderInicialPage() {
  return (
    <header className="headerInicialPage">
      <nav className="nav1InicialPage">
      <Link to="/">Início</Link>
      </nav>
      <nav className="nav2InicialPage">
        <Link to="/about">Sobre Mim</Link>
      </nav>
      <nav
        className="nav3InicialPage"
      >
        <Link to="/projects">Projetos</Link>
      </nav>
      <nav className="nav4InicialPage">
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default HeaderInicialPage;
