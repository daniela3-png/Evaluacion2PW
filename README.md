# Evaluacion 2 Programación WEB: Backend + Cheerio

## Objetivo
Implementar un servicio backend con Node.js y Express que utiliza Cheerio para extraer datos específicos de un sitio web a partir de su URL.

## Instalación y Ejecución
1. Instalar dependencias: `npm install`
2. Correr el servidor: `node src/app.js`

## Arquitectura (Capas)
- **Routes**: Define el endpoint `/api/scrape`.
- **Controllers**: Gestiona la entrada (URL) y las respuestas HTTP (200, 400, 500).
- **Services**: Procesa el HTML usando Axios y Cheerio para la extracción de datos.

## Datos Extraídos
1. **Título de la página**: `$('title').text()`
2. **Primer H1**: `$('h1').first().text()`
3. **Cantidad de enlaces**: `$('a').length`

## Ejemplo de uso
`http://localhost:3000/api/scrape?url=https://www.google.com`