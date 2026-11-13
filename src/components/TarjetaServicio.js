// Tarjeta reutilizable: recibe el título, la imagen y la lista de subservicios
function TarjetaServicio({ titulo, imagen, lista }) {
  return (
    <article className="tarjeta-servicio">
      <img src={imagen} alt={titulo} />
      <div className="tarjeta-contenido">
        <h3>{titulo}</h3>
        <ul>
          {lista.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default TarjetaServicio;
