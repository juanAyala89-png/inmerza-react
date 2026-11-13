import BrigadasEmergencia from "../assets/BrigadasEmergencia.png";
import Extintores from "../assets/Extintores.png";
import ProyectosIngenieria from "../assets/ProyectosIngenieria.png";
import TarjetaServicio from "./TarjetaServicio.js";
import "./Servicios.css";

// Información de cada servicio. Para agregar uno nuevo solo se añade aquí.
const servicios = [
  {
    titulo: "Brigadas de emergencia",
    imagen: BrigadasEmergencia,
    lista: [
      "Búsqueda y rescate",
      "Primeros auxilios",
      "Combate contra incendios",
      "Hazmat manejo de sustancias químicas peligrosas",
      "Equipos de respiración autónomos",
    ],
  },
  {
    titulo: "Venta de equipo",
    imagen: Extintores,
    lista: [
      "Extintores",
      "Señalética",
      "Botiquín de primeros auxilios",
      "Equipo de protección personal industrial",
    ],
  },
  {
    titulo: "Proyectos de ingeniería",
    imagen: ProyectosIngenieria,
    lista: [
      "Mantenimiento a sistemas contra incendio",
      "Mantenimiento a bombas del sistema contra incendio",
      "Mantenimiento a cisternas industriales por medio de buceo",
    ],
  },
];

function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <h2 className="titulo-seccion">
        Nuestros <span>servicios</span>
      </h2>

      <div className="grid-servicios">
        {servicios.map((servicio) => (
          <TarjetaServicio
            key={servicio.titulo}
            titulo={servicio.titulo}
            imagen={servicio.imagen}
            lista={servicio.lista}
          />
        ))}
      </div>

      <div className="cotiza-container">
        <a href="#contacto" className="btn-contacto">Cotiza tu servicio</a>
      </div>
    </section>
  );
}

export default Servicios;
