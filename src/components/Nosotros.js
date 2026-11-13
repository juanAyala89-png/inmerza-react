import misionInmerza from "../assets/MisionInmerza.png";
import visionInmerza from "../assets/VisionInmerza.png";
import "./Nosotros.css";

function Nosotros() {
  return (
    <section id="nosotros" className="seccion-somos">
      <h2 className="titulo-seccion">
        ¿Quiénes <span>somos</span>?
      </h2>

      <p className="descripcion-somos">
        Inmerza es una empresa dedicada a brindar soluciones integrales en
        seguridad e higiene industrial. Contamos con servicios personalizados
        para empresas e instituciones que buscan cumplir con la normatividad y
        garantizar la seguridad de su personal.
      </p>

      {/* BLOQUE MISIÓN (Imagen a la izquierda, Texto a la derecha) */}
      <div className="bloque-filas">
        <div className="columna-imagen">
          <img src={misionInmerza} alt="Brigada de Inmerza en capacitación" />
        </div>
        <div className="columna-texto">
          <h3>MISIÓN</h3>
          <p>
            Brindar servicios integrales en seguridad e higiene industrial
            mediante mantenimiento a cisternas industriales y de equipo contra
            incendios, venta de equipo de seguridad y capacitaciones, ofreciendo
            soluciones responsables, efectivas y comprometidas para garantizar
            entornos laborales seguros y confiables.
          </p>
        </div>
      </div>

      {/* BLOQUE VISIÓN (Texto a la izquierda, Imagen a la derecha) */}
      <div className="bloque-filas reverso">
        <div className="columna-texto texto-derecha">
          <h3>VISIÓN</h3>
          <p>
            Ser la empresa líder en seguridad e higiene industrial por nuestra
            innovación, confianza y protección del personal, las instalaciones y
            el medio ambiente.
          </p>
        </div>
        <div className="columna-imagen">
          <img src={visionInmerza} alt="Capacitación de personal en planta" />
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
