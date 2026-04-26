const { onRequest } = require("firebase-functions/v2/https");
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const path = require('path');

// Apuntamos a la llave que acabas de mover
const analyticsDataClient = new BetaAnalyticsDataClient({
    keyFilename: path.join(__dirname, 'service-account.json'),
});

exports.getMetricasGA4 = onRequest({ cors: true }, async (req, res) => {
    const propertyId = '532976474'; 
    
    try {
        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
            dimensions: [
                { name: 'sessionSource' }, // Origen (QR, Google, etc)
                { name: 'city' },          // Ciudades
                { name: 'pagePath' }       // Qué páginas ven
            ],
            metrics: [
                { name: 'activeUsers' },
                { name: 'averageSessionDuration' }, // El cuadro verde
                { name: 'bounceRate' },
                { name: 'sessions' }
            ],
        });

        res.json({ success: true, rows: response.rows });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});