import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="Logo">
        <Link to="/">Calculadora Praiastur</Link>
      </div>
      <nav>{/* <Link to="/relatorios">Relatórios</Link> */}</nav>
    </header>
  );
};

export default Header;
