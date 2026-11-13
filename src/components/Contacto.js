import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Formulario from "./Formulario.js";
import "./Contacto.css";

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <h2 className="titulo-seccion titulo-naranja">Contáctanos</h2>

      <div className="grid-contacto">
        {/* TARJETA DE INFORMACIÓN DE CONTACTO */}
        <div className="tarjeta-contacto">
          <h3>Información de contacto</h3>

          <ul className="lista-contacto">
            <li>
              <span className="icono-contacto"><FiPhone /></span>
              <a href="tel:+528124417380">81 2441 7380</a>
            </li>
            <li>
              <span className="icono-contacto"><FiMail /></span>
              <a href="mailto:servicios@inmerza.com">servicios@inmerza.com</a>
            </li>
            <li>
              <span className="icono-contacto"><FaWhatsapp /></span>
              <a href="https://wa.me/528124417380" target="_blank" rel="noreferrer">
                81 2441 7380
              </a>
            </li>
          </ul>

          <h3>¿Necesitas una respuesta rápida?</h3>
          <p className="texto-rapido">
            Llámanos directamente y te atenderemos en menos de 24 horas.
          </p>

          <a href="tel:+528124417380" className="btn-naranja">Llamar ahora</a>
        </div>

        {/* TARJETA DEL FORMULARIO */}
        <div className="tarjeta-contacto">
          <h3>Contáctanos</h3>
          <Formulario />
        </div>
      </div>
    </section>
  );
}

export default Contacto;
