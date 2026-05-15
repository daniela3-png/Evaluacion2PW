const cheerio = require('cheerio');
const axios = require('axios');

const scrapeData = async (url) => {
    try {
        const { data } = await axios.get(url);
        
        const $ = cheerio.load(data);
        
        const tituloPágina = $('title').text().trim() || 'Sin título';
        const h1Principal = $('h1').first().text().trim() || 'No se encontró H1';
        const cantidadEnlaces = $('a').length;

        return {
            fuente: url,
            datos: {
                titulo: tituloPágina,
                encabezado: h1Principal,
                totalLinks: cantidadEnlaces
            },
            fechaProcesado: new Date().toISOString()
        };
    } catch (error) {
        throw new Error(`Error al intentar obtener datos de la URL: ${error.message}`);
    }
};

module.exports = { scrapeData };