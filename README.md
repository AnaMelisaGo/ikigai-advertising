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


![show final site image here](public\images\docs\inicio.png)


***


## ¿Qué hace y qué necesita para cumplir su función?
Este proyecto representa una agencia integral de publicidad y marketing enfocada en transformar ideas en experiencias de marca impactantes.

La empresa nace con la convicción de que toda marca tiene un propósito, y su misión es ayudar a comunicarlo de forma auténtica, estratégica y visualmente poderosa.

Su objetivo principal es conectar ideas con resultados reales, integrando estrategia, creatividad, diseño y producción en un solo flujo de trabajo coherente.


![show favicon site image here](public\favicon.ico)


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

#### Diseño


##### 1. Tipografía
- Headings: 'Space Grotesk', sans-serif
- Body: 'Inter', sans-serif

La combinación busca equilibrio entre carácter creativo (Space Grotesk) y legibilidad profesional (Inter).

##### 2. Esquema de colores
El color #fff se ha usado como base limpia y elegante. #334155 para textos y estructura. #06B6D4 / #002E46 como tonos principales de contraste. Accento: #F97316 para llamadas a la acción y detalles clave

![show site logo here](public\images\docs\paleta-colores.png)

La paleta está diseñada para transmitir:

- Confianza
- Modernidad
- Energía creativa
- Enfoque digital contemporáneo

##### 3. Logotipo
The logo was ... add detail, or remove as necessary


![show site logo here](assets/docs/image.png)


##### 4. Wireframing


The wireframes were created for each individual page on three different screen sizes. All the wireframes are down below.


<details>
<summary>Wireframes</summary>
Home page


![Home page](#)


Wish tree page


![...More pagees](#)


Send wishes page


![Another page](#)


Login/Register page


![Login/Register page example](#)


</details>


[Volver arriba](#índice)


## Tecnologías utilizada


#### Lenguajes, frameworks, editores y control de versiones:


* Nuxt 4 (framework principal)
* Vue 3 (component-based architecture)
* VSCode (entorno de desarrollo)

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

Make sure to install dependencies:

```bash
# npm
npm install

```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

```

### Production

Build the application for production:

```bash
# npm
npm run build

```

To generate static files for production:

```bash
# npm
npm run generate

```

Locally preview production build:

```bash
# npm
npm run preview

```
Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

[Volver arriba](#índice)

## Despliegue
El despliegue del proyecto se ha realizado mediante un entorno de hosting compartido, utilizando FTP (File Transfer Protocol) como método de transferencia de archivos. Para ello, se han utilizado los archivos generados previamente mediante el comando:

```bash
# npm
npm run generate

```
Con esto asegura que la aplicación se exporte como contenido estático listo para producción.

Este proceso permite transferir directamente los archivos compilados y optimizados al servidor. Este enfoque ofrece una solución sencilla y accesible para la publicación del proyecto, especialmente en entornos donde no se dispone de pipelines automatizados de CI/CD. Aunque es un método más tradicional, permite un control directo sobre los archivos desplegados y la estructura final del sitio en el servidor.

[Volver arriba](#índice)
