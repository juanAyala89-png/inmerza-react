import background from "../assets/inmerza.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <img
        className="hero-fondo"
        src={background}
        alt="Fondo Inmerza"
        fetchPriority="high"
      />

      <div className="hero-contenido">
        <h1 className="header-title">Tu seguridad es nuestra prioridad</h1>

        <p className="header-subtitle">
          Somos especialistas en seguridad industrial, brigadas de emergencia,
          capacitación y proyectos de ingeniería en mantenimiento
        </p>

        <div className="botones">
          <a href="#servicios" className="btn-servicios">Servicios</a>
          <a href="#contacto" className="btn-contacto">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
