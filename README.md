# Ikigai Advertising
***


## Índice:
* [¿Qué hace y qué necesita para cumplir su función?](#qué-hace-y-qué-necesita-para-cumplir-su-función)
* [Funcionalidad del proyecto](#funcionalidad-del-proyecto)
* [User Experience](#user-experience)
   * [Diseño](#diseño)
       * [1. Tipografía](#1-tipografía)
       * [2. Esquema de colores](#2-esquema-de-colores)
       * [3. Logotipo](#3-logotipo)
       * [4. Wireframing](#5-wireframing)
* [Tecnologías utilizada](#tecnologías-utilizada)
* [Características](#características)
* [Defensive Design](#defensive-design)
* [Testing](#testing)
* [Configuraciones](#configuraciones)
* [Despliegue](#despliegue)


***


## Bienvenidos a Ikigai Advertising!


![show final site image here](assets\images\docs\inicio.png)


***


## ¿Qué hace y qué necesita para cumplir su función?
Este proyecto representa una agencia integral de publicidad y marketing enfocada en transformar ideas en experiencias de marca impactantes.

La empresa nace con la convicción de que toda marca tiene un propósito, y su misión es ayudar a comunicarlo de forma auténtica, estratégica y visualmente poderosa.

Su objetivo principal es conectar ideas con resultados reales, integrando estrategia, creatividad, diseño y producción en un solo flujo de trabajo coherente.

### El logo y favicon
![El logo y favicon](assets\images\docs\logo.png)


### Funcionalidad del proyecto
La plataforma/identidad digital cumple con las siguientes funciones:

- Presentar los servicios de la agencia de forma clara y estructurada
- Comunicar el proceso creativo y estratégico de trabajo
- Mostrar la filosofía de marca centrada en ideas y propósito
- Facilitar la conexión entre clientes potenciales y la agencia
- Reflejar una imagen moderna, premium y creativa


[Volver arriba](#índice)


## User Experience:

La experiencia del usuario está diseñada para ser:

- Intuitiva y fluida
- Visualmente atractiva pero minimalista
- Centrada en el contenido y la narrativa de la marca
- Orientada a la conversión y la comprensión rápida del valor

La navegación guía al usuario desde la idea inicial hasta la comprensión del proceso creativo de la agencia.

### Diseño


#### 1. Tipografía
- Headings: 'Space Grotesk', sans-serif
- Body: 'Inter', sans-serif

La combinación busca equilibrio entre carácter creativo (Space Grotesk) y legibilidad profesional (Inter).

#### 2. Esquema de colores
El color #fff se ha usado como base limpia y elegante. #334155 para textos y estructura. #06B6D4 / #002E46 como tonos principales de contraste. Accento: #F97316 para llamadas a la acción y detalles clave

![Paleta de colores](assets\images\docs\paleta-colores.png)

La paleta está diseñada para transmitir:

- Confianza
- Modernidad
- Energía creativa
- Enfoque digital contemporáneo

#### 3. Logotipo

El __ikigai__ es un concepto japonés que se refiere a la razón de ser o propósito de la vida. Lo que nos motiva a levantarnos cada día. Lo que hace que la vida valga la pena.


![Ikigai Advertising logo](assets\images\docs\logo-vertical.png)


#### 4. Wireframing


Los siguientes wireframes fueron utilizados como guía durante la fase de planificación y diseño, permitiendo definir la estructura de la página web, la jerarquía de la información y la distribución de los distintos componentes antes de iniciar el desarrollo de la interfaz final.

##### (Ver la maquetación desplegando la opción abajo.)

<details>
<summary>Wireframes</summary>

Página de Inicio


![Página inicio](assets\images\docs\wireframes\home-page.png)


Servicios


![Servicios](assets\images\docs\wireframes\servicios-page.png)


Portfolio


![Portfolio](assets\images\docs\wireframes\portfolio-page.png)


Quienes somos


![Página quienes somos](assets\images\docs\wireframes\about-page.png)

Contacto


![Contacto](assets\images\docs\wireframes\contact-page.png)


</details>


[Volver arriba](#índice)


## Tecnologías utilizada


#### Lenguajes, frameworks, editores y control de versiones:


* Nuxt 4 (framework principal)
* Vue 3 (component-based architecture)
* Tailwind CSS
* FontAwesome (iconos)
* VSCode (entorno de desarrollo)
* WinSCP (para transferir archivos al hosting compartido)

El stack está optimizado para rendimiento, escalabilidad y mantenibilidad, permitiendo crecimiento futuro sin comprometer la estructura actual.


## Características

* Hero principal con mensajes de marca impactantes
* Sección de procesos clara y narrativa (estrategia → ejecución)
* Diseño completamente responsive (mobile-first)
* Componentización modular en Vue/Nuxt
* Animaciones suaves para mejorar percepción de fluidez
* Sistema visual enfocado en storytelling de marca
* Jerarquía clara de contenido para conversión

[Volver arriba](#índice)

## Defensive Design

El diseño sigue un enfoque defensivo basado en simplicidad estratégica:

- Menos elementos, mayor impacto
- Jerarquía visual clara y predecible
- Evitar sobrecarga visual o distracciones
- Uso controlado de animaciones
- Consistencia en todos los puntos de interacción

La filosofía es clara: la simplicidad bien ejecutada transmite más valor que la complejidad innecesaria.


## Pruebas

El proyecto ha sido evaluado bajo criterios de:

* Responsividad en múltiples breakpoints
* Consistencia visual entre secciones
* Validación de experiencia de usuario en flujo completo
* Rendimiento en carga inicial y navegación
* Comportamiento de animaciones y transiciones


[Volver arriba](#índice)



## Configuraciones

### Setup

Para instalar las dependencias necesarias:

```bash
# npm
npm install

```

### Development Server

Arranca el servidor local en `http://localhost:3000` usando el commando:

```bash
# npm
npm run dev

```

### Producción

Construir la aplicación para producción con este comando:

```bash
# npm
npm run build

```

Para generar archivos estáticos:

```bash
# npm
npm run generate

```

Para previsualizar la construcción para la producción en local:

```bash
# npm
npm run preview

```
Haga click a la [documentación de Nuxt](https://nuxt.com/docs/getting-started/introduction) para saber más.


[Volver arriba](#índice)

## Despliegue
El despliegue del proyecto se ha realizado mediante un entorno de hosting compartido, utilizando FTP (File Transfer Protocol) como método de transferencia de archivos. Para ello, se han utilizado los archivos generados previamente mediante el comando:

```bash
# npm
npm run generate

```
Con esto asegura que la aplicación se exporte como contenido estático listo para producción.

Con el cliente FTP, busca el archivo _.output_ dentro del proyecto. Selecciona los archivos generados por Vue dentro de la carpeta _public_ y guardalos en la carpeta __public_html__ del hosting compartido.

Este proceso permite transferir directamente los archivos compilados y optimizados al servidor. Este enfoque ofrece una solución sencilla y accesible para la publicación del proyecto, especialmente en entornos donde no se dispone de pipelines automatizados de CI/CD. Aunque es un método más tradicional, permite un control directo sobre los archivos desplegados y la estructura final del sitio en el servidor.

Hay otras formas de desplegar, echa un vistazo a la [documentación de despliegue](https://nuxt.com/docs/getting-started/deployment) para más información.

[Volver arriba](#índice)
