import datosLegales from "../datosLegales.js";
import PaginaLegal from "./PaginaLegal.js";

function TerminosCondiciones() {
  const { nombreComercial, razonSocial, rfc, domicilio, correo, telefono, sitioWeb } =
    datosLegales;

  return (
    <PaginaLegal titulo="Términos y condiciones">
      <p>
        Bienvenido al sitio web de <strong>{nombreComercial}</strong>. Al
        acceder y navegar en <strong>{sitioWeb}</strong> (en adelante, el
        "Sitio"), aceptas los presentes Términos y condiciones. Si no estás de
        acuerdo con ellos, te pedimos que no utilices el Sitio.
      </p>

      <h2>1. Identidad de la empresa</h2>
      <div className="recuadro-legal">
        <p><strong>Nombre comercial:</strong> {nombreComercial}</p>
        <p><strong>Razón social:</strong> {razonSocial}</p>
        <p><strong>RFC:</strong> {rfc}</p>
        <p><strong>Ubicación:</strong> {domicilio}</p>
        <p><strong>Correo:</strong> <a href={`mailto:${correo}`}>{correo}</a></p>
        <p><strong>Teléfono:</strong> {telefono}</p>
      </div>

      <h2>2. Objeto del Sitio</h2>
      <p>
        El Sitio tiene como finalidad dar a conocer los servicios de{" "}
        {nombreComercial} en materia de seguridad e higiene industrial,
        brigadas de emergencia, capacitación, venta de equipo de seguridad y
        proyectos de ingeniería, así como permitir que los visitantes soliciten
        información o cotizaciones.
      </p>

      <h2>3. Información de los servicios</h2>
      <p>
        La información publicada en el Sitio es de carácter informativo y
        general. No constituye una oferta vinculante ni sustituye la asesoría
        técnica que se brinda de manera personalizada. Los alcances, tiempos,
        precios y condiciones de cada servicio se establecen por escrito en la
        cotización o contrato correspondiente.
      </p>

      <h2>4. Cotizaciones</h2>
      <ul>
        <li>
          Las cotizaciones se elaboran con base en la información
          proporcionada por el cliente y pueden ajustarse tras una visita o
          evaluación técnica.
        </li>
        <li>
          Salvo que se indique otra cosa, las cotizaciones tienen una vigencia
          de 30 días naturales a partir de su emisión.
        </li>
        <li>
          Los precios se expresan en pesos mexicanos (MXN) y, cuando aplique,
          se indicará si incluyen o no el Impuesto al Valor Agregado (IVA).
        </li>
      </ul>

      <h2>5. Contratación, pagos y facturación</h2>
      <p>
        La contratación de cualquier servicio o la compra de equipo se
        formaliza mediante la aceptación por escrito de la cotización o la
        firma del contrato respectivo, donde se detallan las formas de pago,
        anticipos y plazos. {nombreComercial} emite el Comprobante Fiscal
        Digital por Internet (CFDI) correspondiente a cada operación.
      </p>

      <h2>6. Cancelaciones y reprogramaciones</h2>
      <p>
        Las cancelaciones o cambios de fecha de servicios y capacitaciones
        deberán solicitarse con al menos 72 horas de anticipación. Las
        condiciones de reembolso o cargos por cancelación se establecen en
        cada cotización o contrato.
      </p>

      <h2>7. Venta de equipo y garantías</h2>
      <p>
        El equipo de seguridad comercializado cuenta con la garantía que
        otorga el fabricante. Para hacerla válida, el cliente deberá
        conservar su comprobante de compra y seguir las instrucciones de uso y
        mantenimiento del equipo. La garantía no cubre daños causados por mal
        uso, accidentes o modificaciones no autorizadas.
      </p>

      <h2>8. Responsabilidad del cliente</h2>
      <p>
        El cliente se compromete a proporcionar información veraz, a dar
        acceso seguro a sus instalaciones y a seguir las recomendaciones
        técnicas emitidas. {nombreComercial} no será responsable por daños
        derivados de información falsa o incompleta, ni por no atender las
        recomendaciones entregadas en reportes, dictámenes o capacitaciones.
      </p>

      <h2>9. Uso adecuado del Sitio</h2>
      <p>Al usar el Sitio te comprometes a no:</p>
      <ul>
        <li>Enviar información falsa o de terceros sin su autorización.</li>
        <li>Usar el formulario de contacto para enviar publicidad no solicitada (spam).</li>
        <li>Intentar dañar, alterar o acceder sin autorización al Sitio.</li>
      </ul>

      <h2>10. Propiedad intelectual</h2>
      <p>
        Los textos, logotipos, imágenes, diseño y demás contenido del Sitio
        son propiedad de {nombreComercial} o se usan con autorización, y están
        protegidos por la Ley Federal del Derecho de Autor y la Ley Federal de
        Protección a la Propiedad Industrial. Queda prohibida su reproducción
        total o parcial sin autorización previa y por escrito.
      </p>

      <h2>11. Enlaces a sitios de terceros</h2>
      <p>
        El Sitio puede contener enlaces a servicios de terceros (por ejemplo,
        WhatsApp). {nombreComercial} no es responsable del contenido ni de las
        políticas de privacidad de dichos sitios.
      </p>

      <h2>12. Limitación de responsabilidad</h2>
      <p>
        {nombreComercial} procura que el Sitio funcione correctamente y que su
        información esté actualizada, pero no garantiza que esté libre de
        errores o interrupciones. No será responsable por daños derivados del
        uso del Sitio o de la imposibilidad de acceder a él.
      </p>

      <h2>13. Protección de datos personales</h2>
      <p>
        Los datos personales que nos compartas a través del Sitio se tratan
        conforme a nuestro <a href="#privacidad">Aviso de privacidad</a>.
      </p>

      <h2>14. Modificaciones</h2>
      <p>
        {nombreComercial} puede modificar estos Términos y condiciones en
        cualquier momento. Los cambios entrarán en vigor desde su publicación
        en el Sitio, por lo que te recomendamos revisarlos periódicamente.
      </p>

      <h2>15. Legislación aplicable y jurisdicción</h2>
      <p>
        Estos Términos y condiciones se rigen por las leyes de los Estados
        Unidos Mexicanos. Para cualquier controversia, las partes se someten a
        los tribunales competentes del Estado de México, renunciando a
        cualquier otro fuero que pudiera corresponderles. Lo anterior sin
        perjuicio de los derechos que la Ley Federal de Protección al
        Consumidor otorga a los consumidores.
      </p>

      <h2>16. Contacto</h2>
      <p>
        Si tienes dudas sobre estos Términos y condiciones, escríbenos a{" "}
        <a href={`mailto:${correo}`}>{correo}</a> o llámanos al {telefono}.
      </p>
    </PaginaLegal>
  );
}

export default TerminosCondiciones;
