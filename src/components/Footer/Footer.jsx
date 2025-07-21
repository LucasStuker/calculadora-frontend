import React from "react";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p>
        © {currentYear} Praiastur Clube de Turismo. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
