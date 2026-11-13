import logoInmerza from "../assets/inmerzalogo.png";
import "./Footer.css";

function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-contenido">
        <a href="#inicio">
          <img className="footer-logo" src={logoInmerza} alt="Inmerza Logo" />
        </a>

        <div className="footer-enlaces">
          <a href="#contacto">Contacto</a>
          <a href="#terminos">Términos y condiciones</a>
          <a href="#privacidad">Aviso de privacidad</a>
        </div>
      </div>

      <p className="footer-derechos">© {anio} Inmerza. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
