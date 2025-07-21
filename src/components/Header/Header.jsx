import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoPraiastur from "../../assets/Logo-Branca.png";
const Header = () => {
  return (
    <header className="site-header">
      <div className="top-bar">
        <Link to="/">
          <img src={logoPraiastur} alt="Praiastur" Logo className="logo" />
        </Link>
      </div>
      <div className="main-header">
        <h1>Simulador de Comissão</h1>
      </div>
    </header>
  );
};

export default Header;
