const cheerioService = require('../services/cheerioService');

const getScrape = async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ 
            error: 'Solicitud incorrecta', 
            mensaje: 'Debes proporcionar una URL válida en el parámetro de consulta.' 
        });
    }

    try {
        const results = await cheerioService.scrapeData(url);

        res.status(200).json({
            status: 'success',
            data: results
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error', 
            mensaje: error.message 
        });
    }
};

module.exports = { getScrape };