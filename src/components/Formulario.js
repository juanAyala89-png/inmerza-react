import { useState } from "react";

const datosIniciales = {
  nombre: "",
  empresa: "",
  telefono: "",
  correo: "",
  mensaje: "",
  acepta: false,
};

// Revisa que los campos obligatorios estén llenos y con el formato correcto
function validar(datos) {
  const errores = {};

  if (!datos.nombre.trim()) {
    errores.nombre = "Escribe tu nombre completo";
  }

  if (!datos.telefono.trim()) {
    errores.telefono = "Escribe tu teléfono";
  } else if (!/^\d{10}$/.test(datos.telefono.replace(/\s/g, ""))) {
    errores.telefono = "El teléfono debe tener 10 dígitos";
  }

  if (!datos.correo.trim()) {
    errores.correo = "Escribe tu correo electrónico";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) {
    errores.correo = "El correo no es válido";
  }

  if (!datos.mensaje.trim()) {
    errores.mensaje = "Escribe tu mensaje";
  }

  if (!datos.acepta) {
    errores.acepta = "Debes aceptar el Aviso de privacidad para enviar tu mensaje";
  }

  return errores;
}

function Formulario() {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState(""); // "", "enviando", "enviado" o "error"

  const cambiarCampo = (e) => {
    // La casilla de aceptación usa "checked" en lugar de "value"
    const { name, value, type, checked } = e.target;
    setDatos({ ...datos, [name]: type === "checkbox" ? checked : value });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);

    // Si hay errores no se envía el formulario
    if (Object.keys(nuevosErrores).length > 0) return;

    setEstado("enviando");

    try {
      // Envío con Netlify Forms (funciona cuando la página está publicada en Netlify)
      const respuesta = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contacto",
          ...datos,
          acepta: datos.acepta ? "Sí" : "No",
        }).toString(),
      });

      if (!respuesta.ok) throw new Error("No se pudo enviar");

      setEstado("enviado");
      setDatos(datosIniciales);
    } catch {
      setEstado("error");
    }
  };

  return (
    <form className="formulario" onSubmit={enviarFormulario} noValidate>
      <div className="campo">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={datos.nombre}
          onChange={cambiarCampo}
          className={errores.nombre ? "con-error" : ""}
        />
        {errores.nombre && <span className="mensaje-error">{errores.nombre}</span>}
      </div>

      <div className="fila-campos">
        <div className="campo">
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={datos.empresa}
            onChange={cambiarCampo}
          />
        </div>
        <div className="campo">
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={datos.telefono}
            onChange={cambiarCampo}
            className={errores.telefono ? "con-error" : ""}
          />
          {errores.telefono && <span className="mensaje-error">{errores.telefono}</span>}
        </div>
      </div>

      <div className="campo">
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={datos.correo}
          onChange={cambiarCampo}
          className={errores.correo ? "con-error" : ""}
        />
        {errores.correo && <span className="mensaje-error">{errores.correo}</span>}
      </div>

      <div className="campo">
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows="4"
          value={datos.mensaje}
          onChange={cambiarCampo}
          className={errores.mensaje ? "con-error" : ""}
        />
        {errores.mensaje && <span className="mensaje-error">{errores.mensaje}</span>}
      </div>

      <div className="campo">
        <label className="casilla-acepta">
          <input
            type="checkbox"
            name="acepta"
            checked={datos.acepta}
            onChange={cambiarCampo}
          />
          <span>
            He leído y acepto el{" "}
            <a href="#privacidad" target="_blank" rel="noreferrer">Aviso de privacidad</a> y los{" "}
            <a href="#terminos" target="_blank" rel="noreferrer">Términos y condiciones</a>.
          </span>
        </label>
        {errores.acepta && <span className="mensaje-error">{errores.acepta}</span>}
      </div>

      <button type="submit" className="btn-naranja" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {estado === "enviado" && (
        <p className="aviso aviso-exito">¡Gracias! Tu mensaje fue enviado correctamente.</p>
      )}
      {estado === "error" && (
        <p className="aviso aviso-error">
          No se pudo enviar el mensaje. Intenta de nuevo o llámanos al 81 2441 7380.
        </p>
      )}
    </form>
  );
}

export default Formulario;
