# Página web Inmerza (React)

Landing page de **Inmerza – Soluciones en seguridad e higiene industrial**, desarrollada con **React JS, HTML y CSS** y lista para publicarse en **Netlify**.

## Cómo correr el proyecto

1. Instalar las dependencias (solo la primera vez):

   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abrir en el navegador la dirección que aparece (normalmente http://localhost:5173).

3. Generar la versión final para publicar:

   ```bash
   npm run build
   ```

   Los archivos quedan en la carpeta `dist/`.

## Estructura del proyecto

```
src/
├── assets/                    Imágenes y logotipo
├── components/
│   ├── Header.js              Menú de navegación (con menú desplegable en celular)
│   ├── Hero.js                Portada "Tu seguridad es nuestra prioridad"
│   ├── Nosotros.js            ¿Quiénes somos?, Misión y Visión
│   ├── Servicios.js           Sección de servicios
│   ├── TarjetaServicio.js     Tarjeta reutilizable de cada servicio
│   ├── PorQueElegirnos.js     Ventajas de la empresa
│   ├── Contacto.js            Información de contacto
│   ├── Formulario.js          Formulario con validación y aceptación del aviso de privacidad
│   ├── PaginaLegal.js         Diseño común de las páginas legales
│   ├── TerminosCondiciones.js Página de Términos y condiciones (#terminos)
│   ├── AvisoPrivacidad.js     Página de Aviso de privacidad (#privacidad)
│   └── Footer.js              Pie de página
├── datosLegales.js            Razón social, domicilio, RFC, etc. (¡llenar antes de publicar!)
├── App.js                     Componente principal que une todas las secciones
├── main.js                    Punto de entrada de React
└── index.css                  Colores, tipografía y estilos generales
```

> Los componentes usan archivos `.js` (no `.jsx`). Esto está configurado en `vite.config.js`.

## Términos y condiciones y Aviso de privacidad

- Se abren desde el pie de página o desde el formulario de contacto.
- Antes de publicar, edita `src/datosLegales.js` y reemplaza los textos entre corchetes `[ ]` con la razón social, RFC y domicilio reales.
- Es recomendable que un abogado revise los textos antes de publicar.

Cada componente tiene su propio archivo `.css` con sus estilos.

## Diseño responsivo

La página se adapta a tres tamaños de pantalla:

| Pantalla | Ancho | Cambios principales |
| --- | --- | --- |
| Laptop / escritorio | más de 1024 px | Diseño completo como en Figma |
| Tableta | de 768 a 1024 px | Servicios en 2 columnas y menú desplegable |
| Celular | menos de 768 px | Todo en una sola columna |

## Formulario de contacto

El formulario valida que el nombre, el teléfono (10 dígitos), el correo y el mensaje estén completos antes de enviarse.

Los mensajes se envían con **Netlify Forms**, por lo que **solo funcionan cuando la página ya está publicada en Netlify**. Al probarlo con `npm run dev` aparecerá el aviso de error, lo cual es normal. Los mensajes recibidos se ven en el panel de Netlify, en la sección **Forms**.

## Publicar en Netlify

1. Subir el proyecto a un repositorio de GitHub.
2. En Netlify elegir **Add new site → Import an existing project** y seleccionar el repositorio.
3. Netlify toma la configuración del archivo `netlify.toml` (comando `npm run build` y carpeta `dist`).

## Colores del diseño

| Color | Código |
| --- | --- |
| Azul marino | `#1A2B4B` |
| Naranja | `#EA6128` |
| Gris claro | `#F1F3F5` |
| Blanco | `#FFFFFF` |

Tipografía: **Roboto Flex**.
