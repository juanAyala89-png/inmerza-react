import datosLegales from "../datosLegales.js";
import PaginaLegal from "./PaginaLegal.js";

function AvisoPrivacidad() {
  const { nombreComercial, razonSocial, domicilio, correo, telefono } =
    datosLegales;

  return (
    <PaginaLegal titulo="Aviso de privacidad">
      <p>
        En cumplimiento de la Ley Federal de Protección de Datos Personales en
        Posesión de los Particulares y su normatividad aplicable, te
        informamos cómo tratamos los datos personales que nos proporcionas.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <div className="recuadro-legal">
        <p><strong>{razonSocial}</strong> (en adelante, "{nombreComercial}")</p>
        <p><strong>Domicilio:</strong> {domicilio}</p>
        <p><strong>Correo:</strong> <a href={`mailto:${correo}`}>{correo}</a></p>
        <p><strong>Teléfono:</strong> {telefono}</p>
      </div>

      <h2>2. Datos personales que recabamos</h2>
      <p>
        A través del formulario de contacto, correo electrónico, teléfono o
        WhatsApp podemos recabar los siguientes datos:
      </p>
      <ul>
        <li>Nombre completo</li>
        <li>Empresa u organización en la que trabajas</li>
        <li>Número de teléfono</li>
        <li>Correo electrónico</li>
        <li>La información que incluyas en tu mensaje</li>
      </ul>
      <p>
        <strong>No recabamos datos personales sensibles</strong> (como estado
        de salud, origen étnico, creencias religiosas u otros). Te pedimos no
        incluirlos en tus mensajes.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <p>Finalidades primarias (necesarias para atenderte):</p>
      <ul>
        <li>Responder tus solicitudes de información.</li>
        <li>Elaborar y enviarte cotizaciones.</li>
        <li>Dar seguimiento a los servicios o productos contratados.</li>
        <li>Emitir facturas cuando corresponda.</li>
      </ul>
      <p>Finalidades secundarias (no necesarias para atenderte):</p>
      <ul>
        <li>Enviarte información sobre nuevos servicios, cursos y promociones.</li>
        <li>Realizar encuestas de satisfacción.</li>
      </ul>
      <p>
        Si no deseas que tus datos se usen para las finalidades secundarias,
        envía un correo a <a href={`mailto:${correo}`}>{correo}</a> indicándolo.
        Esto no afectará la atención que te brindemos.
      </p>

      <h2>4. Transferencia de datos</h2>
      <p>
        {nombreComercial} no vende, renta ni comparte tus datos personales con
        terceros, salvo cuando lo exija una autoridad competente o en los casos
        previstos por la ley. Para operar el Sitio utilizamos proveedores
        tecnológicos (por ejemplo, el servicio de alojamiento web que recibe
        los mensajes del formulario), quienes solo tratan los datos por cuenta
        nuestra y con fines de almacenamiento.
      </p>

      <h2>5. Derechos ARCO</h2>
      <p>
        Tienes derecho a <strong>Acceder</strong> a tus datos,{" "}
        <strong>Rectificarlos</strong> si son inexactos,{" "}
        <strong>Cancelarlos</strong> cuando consideres que no se requieren y{" "}
        <strong>Oponerte</strong> a su uso para fines específicos. También
        puedes revocar el consentimiento que nos hayas otorgado.
      </p>
      <p>
        Para ejercer estos derechos envía una solicitud a{" "}
        <a href={`mailto:${correo}`}>{correo}</a> que incluya:
      </p>
      <ul>
        <li>Tu nombre y un medio para comunicarte contigo.</li>
        <li>Una copia de tu identificación oficial.</li>
        <li>La descripción clara del derecho que deseas ejercer y de los datos involucrados.</li>
      </ul>
      <p>
        Te responderemos en un plazo máximo de 20 días hábiles y, si la
        solicitud procede, se hará efectiva dentro de los 15 días hábiles
        siguientes.
      </p>

      <h2>6. Conservación y seguridad</h2>
      <p>
        Conservamos tus datos solo durante el tiempo necesario para cumplir
        las finalidades descritas y las obligaciones legales aplicables.
        Aplicamos medidas de seguridad administrativas, técnicas y físicas
        para protegerlos contra daño, pérdida, alteración o uso no autorizado.
      </p>

      <h2>7. Uso de cookies</h2>
      <p>
        Este Sitio no utiliza cookies propias para rastrear tu navegación ni
        con fines publicitarios. Para mostrar la tipografía se cargan fuentes
        desde Google Fonts, servicio que puede registrar datos técnicos como
        tu dirección IP conforme a sus propias políticas.
      </p>

      <h2>8. Cambios al aviso de privacidad</h2>
      <p>
        Este aviso puede modificarse por cambios legales o en nuestros
        servicios. Cualquier cambio se publicará en esta misma página,
        indicando la fecha de la última actualización.
      </p>

      <h2>9. Autoridad</h2>
      <p>
        Si consideras que tu derecho a la protección de datos personales ha
        sido vulnerado, puedes acudir ante la autoridad competente en materia
        de protección de datos personales en México.
      </p>

      <h2>10. Consentimiento</h2>
      <p>
        Al marcar la casilla del formulario de contacto y enviar tus datos,
        manifiestas que leíste y aceptas el presente Aviso de privacidad y
        los <a href="#terminos">Términos y condiciones</a>.
      </p>
    </PaginaLegal>
  );
}

export default AvisoPrivacidad;
