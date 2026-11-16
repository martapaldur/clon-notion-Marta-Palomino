# Clon de Notion

He reproducido una vista de Notion utilizando Nuxt, Vue y Tailwind.
El objetivo es copiar la interfaz analizada previamente en Figma. He hecho los componentes, los estilos y algunas interacciones básicas, pero no hay navegación ni toda la interacción de la vista. 

## 1. Auditoría de la interfaz

Link a la uditoría en Figma: https://www.figma.com/design/Gk2JTMIv8OhEaN9yuP2eoP/Ejercicio-notion?node-id=0-1&t=b4RTI6oNQZLohANG-1. Hice una auditoría bastante basica para identificar las partes principales de la interfaz, sus componentes y sus estilos
A partir de este análisis organicé la página en tres áreas, la sidebar el header y el main (contenido de la página).

## 2. Herramientas que he usado

- HTML, CSS y JavaScript
- Vue 3 para crear los componentes con sus props sus eventos y sus estados
- Nuxt 4 con Vite
- Tailwind CSS 4 para estilos
- Lucide Vue Next para los iconos 
- Node.js y npm


## 3. Cosas importantes

- Los estilos se organizan en archivos CSS independientes, en main.css  están todos los archivos importados y en tokens.css están las bases del sistema de diseño.
- Las funciones de interacción se separan en archivos JavaScript dentro de composables/
- Los arrays están en la carpeta data/
- Algunas cosas son solo visuales, por ejemplo, el buscador no busca, los bloques no se pueden arrastrar y muchos botones no tienen acción
- He usado IA para ayudarme con cositas como por ejemplo como hacer que el sidebar fuera redimensionable y colapsable, pero yo lo he ido poniendo todo en los comentarios

## 4. Estructura de carpetas del proyecto
```text
clon_notion/
├── app/
│   ├── app.vue                  # aplicación
│   ├── assets/
│   │   └── css/
│   │       ├── main.css         # importación de estilos
│   │       ├── tokens.css       # sistema de diseño
│   │       └── components/      # carpetas con los estilos de cada componente
│   │           ├── header/
│   │           ├── layout/
│   │           ├── page/
│   │           ├── sidebar/
│   │           └── ui/
│   ├── components/
│   │   ├── header/              # componentes que solo se usan en el header
│   │   ├── page/                # componentes que se usan solo en main
│   │   ├── sidebar/             # componentes de la sidebar
│   │   └── ui/                  # botones, iconos, tooltips, menús y los pageItems que se usan en el sidebar y los breadcrumbs.
│   ├── composables/
│   │   ├── menu.js              # interacción de los menús
│   │   ├── sidebar.js           # interacciones de la sidebar
│   │   └── theme.js             # cambio de tema de dark a light
│   └── data/
│       ├── breadcrumbs.js       # arrays de datos de los breadcrumbs
│       ├── header.js            # arrays de datos del header
│       ├── icons.js             # importación de iconos de lucide
│       ├── page.js              # arrays de datos de page
│       └── sidebar.js           # arrays de datos de la sidebar
├── public/
│   ├── favicon.png
│   └── images/
├── nuxt.config.ts               # configuración de Nuxt
├── package.json                 # dependencias y comandos
└── README.md
```
## 5. Cosas que podría mejorar en un futuro

Hay algunas cosas que no he hecho, y las apunto aquí porque en algun momento quiero retomar el proyecto porque he aprendido mucho haciendolo. Algunas son tonterías y no quiero olvidarme de que faltan esas cosas por hacer, y otras simplemente no podía abordarlas por falta de tiempo.

- Faltan algunos tooltips en la sidebar porque se me pasaron por alto cuando la hice
- Añadir la variable del color azul del focus de la searchbar en tokens.css
- Añadir más tipos de bloques de contenido, como imágenes, listas, citas o bases de datos, y permitir editarlos o arrastrarlos.
- Hacer funcionales los botones y las opciones de los menús que ahora son solo visuales
- Completar los submenús que faltan y mejorar los que ya existen
- Mejorar ciertos detalles tontísimos como el chevron de las páginas del sidebar al hacer hover
- Hacer más vistas!!
- Hacer que la imagen de portada pueda descargarse, cambairse etc...


## 6. Instalación 

Para abrir el proyecto hay que tener instalado Node.js (una versión LTS compatible con Nuxt) y npm. Las librerías utilizadas, incluidos Nuxt, Vue, Tailwind y Lucide, están declaradas en package.json, por lo que no hace falta instalarlas una a una. Pero bueno, instrucciones muy faciles, solo hay que instalar las dependencias e iniciar el servidor local con npm.