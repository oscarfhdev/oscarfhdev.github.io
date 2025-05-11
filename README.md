# 📄 Mi CV Personalizado con Bootstrap y SASS

¡Bienvenidos! 🚀 Este proyecto consiste en una página web de currículum vitae implementada utilizando **Bootstrap** con **SASS** personalizado, además de funciones con JavaScript.

🔗 **Versión online del CV:**  
[Ver página en GitHub Pages](https://oscarfhdev.github.io/)  

---

## 🛠 Tecnologías utilizadas

- **HTML5**  
- **SASS** (edición directa de las fuentes de Bootstrap)  
- **Bootstrap 5.3.3**  
- **Git y GitHub** para control de versiones  
- **Figma** para el diseño previo
- **JavaScript** para la navegación del menú

  
---

## 🎨 Personalización de Bootstrap

Para cumplir con los requisitos de la tarea, he editado directamente los archivos fuente de Bootstrap usando **SASS**.  
El archivo principal de configuración es `bootstrap_custom.scss`, donde he realizado las siguientes modificaciones principales:

- ✏️ **Colores**:  
  - `$primary`: cambiado a `#B1EEF0`
  - `$secondary`: cambiado a `#BBBBBB`
- ✍️ **Fuente tipográfica**:  
  - `$font-family-base`: cambiado a `'Poppins'` 
- 📱 **Breakpoints de Grid**:  
  - Modificados `xxl`,  y añadidos nuevos (`xsm`, `slg`, `xxxl`)
- 🎯 **Comportamientos personalizados**:  
  - Hover en enlaces, estilos específicos, mejoras visuales en botones, animaciones suaves , centralizado de imágenes en carrusel, etc

✅ Todo esto ha sido realizado *sin modificar directamente los archivos compilados de Bootstrap*, siguiendo buenas prácticas.

---

# Estructura del repositorio

Este repositorio contiene los archivos necesarios para la página web, incluyendo Bootstrap, personalizaciones CSS, funciones con JavaScript imágenes y archivos HTML.

## 📂 Directorios y Archivos

- `/bootstrap-5.3.3/` → Contiene los archivos fuente de **Bootstrap 5.3.3**, incluyendo los archivos de configuración, SASS, JS y la documentación asociada.

- `/css/` → Archivos **CSS personalizados** que incluyen las modificaciones y estilos adicionales.
  - `bootstrap_custom.scss` → Archivo SCSS con las personalizaciones realizadas.
  - `bootstrap_custom.min.css` → Archivo CSS minificado con los estilos personalizados.

- `/js/` → Archivos **CSS personalizados** que incluyen las modificaciones y estilos adicionales.
  - `script.js` → Archivo JavaScript con las funciones para hacer Fetch.


- `/images/` → Archivos de **imágenes** y **iconos**, incluyendo recursos gráficos para la web.
  - `/icons/` → Iconos utilizados en la página web
  - `/languajes&frameworks/` → Iconos de tecnologías
  - `/os/` → Iconos de sistemas operativos
  - `/tools/` → Iconos de herramientas

- `/index.html` → Archivo principal de la página web.

- `/about_me.html` → Página de información personal sobre mí.

- `/contact_me.html` → Página de contacto.

- `/formation&experience.html` → Página que describe mi formación académica y experiencia profesional.

- `/technologies.html` → Página con información sobre las tecnologías que domino.
