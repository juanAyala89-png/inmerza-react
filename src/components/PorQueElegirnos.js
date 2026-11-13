import { PiCertificate, PiMedal, PiUsers, PiGear } from "react-icons/pi";
import "./PorQueElegirnos.css";

// Ventajas de la empresa, cada una con su ícono
const ventajas = [
  {
    icono: <PiCertificate />,
    titulo: "Personal certificado",
    texto:
      "Profesionales acreditados y actualizados en normativas vigentes para garantizar asesoría técnica confiable.",
  },
  {
    icono: <PiMedal />,
    titulo: "Resultados comprobables",
    texto:
      "Reportes e indicadores que demuestran cumplimiento y reducción real de riesgos.",
  },
  {
    icono: <PiUsers />,
    titulo: "Atención personalizada",
    texto:
      "Atención personalizada en cada etapa del proceso, con seguimiento constante.",
  },
  {
    icono: <PiGear />,
    titulo: "Soluciones personalizadas",
    texto:
      "Estrategias diseñadas según el giro, tamaño y nivel de riesgo de tu empresa.",
  },
];

function PorQueElegirnos() {
  return (
    <section id="elegirnos" className="elegirnos">
      <h2 className="titulo-seccion">
        ¿Por qué <span>elegirnos</span>?
      </h2>

      <div className="grid-elegirnos">
        {ventajas.map((ventaja) => (
          <div className="item-elegirnos" key={ventaja.titulo}>
            <div className="icono-elegirnos">{ventaja.icono}</div>
            <div>
              <h3>{ventaja.titulo}</h3>
              <p>{ventaja.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PorQueElegirnos;
