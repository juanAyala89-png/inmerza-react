import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logoInmerza from "../assets/inmerzalogo.png";
import "./Header.css";

function Header() {
  // Controla si el menú está abierto en celular y tableta
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-box">
        <a href="#inicio" className="logo" onClick={cerrarMenu}>
          <img src={logoInmerza} alt="Inmerza Logo" />
        </a>

        <button
          className="btn-menu"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-botones ${menuAbierto ? "abierto" : ""}`}>
          <a href="#servicios" onClick={cerrarMenu}>Servicios</a>
          <a href="#nosotros" onClick={cerrarMenu}>Nosotros</a>
          <a href="#elegirnos" onClick={cerrarMenu}>¿Por qué elegirnos?</a>
          <a href="#contacto" className="btn-nav-contacto" onClick={cerrarMenu}>
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
