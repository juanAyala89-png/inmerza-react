import { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Nosotros from "./components/Nosotros.js";
import Servicios from "./components/Servicios.js";
import PorQueElegirnos from "./components/PorQueElegirnos.js";
import Contacto from "./components/Contacto.js";
import Footer from "./components/Footer.js";
import TerminosCondiciones from "./components/TerminosCondiciones.js";
import AvisoPrivacidad from "./components/AvisoPrivacidad.js";

function App() {
  // Guardamos la parte de la URL después del "#" para saber qué mostrar
  const [ruta, setRuta] = useState(window.location.hash);

  useEffect(() => {
    const cambiarRuta = () => setRuta(window.location.hash);
    window.addEventListener("hashchange", cambiarRuta);
    return () => window.removeEventListener("hashchange", cambiarRuta);
  }, []);

  // Cada vez que cambia la ruta: en las páginas legales subimos al inicio,
  // y en la página principal bajamos a la sección indicada (#servicios, etc.)
  useEffect(() => {
    if (ruta === "#terminos" || ruta === "#privacidad") {
      window.scrollTo(0, 0);
      return;
    }

    const seccion = ruta ? document.querySelector(ruta) : null;
    if (seccion) seccion.scrollIntoView();
  }, [ruta]);

  let contenido;
  if (ruta === "#terminos") {
    contenido = <TerminosCondiciones />;
  } else if (ruta === "#privacidad") {
    contenido = <AvisoPrivacidad />;
  } else {
    contenido = (
      <>
        <Hero />
        <Nosotros />
        <Servicios />
        <PorQueElegirnos />
        <Contacto />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>{contenido}</main>
      <Footer />
    </>
  );
}

export default App;
