const axios = require('axios');
const config = require('./config');

async function sendWhatsAppMessage(toNumber, message) {
    try {
        const response = await axios.post(
            `https://api.maytapi.com/api/${config.PRODUCT_ID}/${config.PHONE_ID}/sendMessage`,
            {
                to_number: toNumber,
                type: "text",
                message: message
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-maytapi-key': config.API_KEY
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error sending WhatsApp message:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// Örnek kullanım
(async () => {
    try {
        const result = await sendWhatsAppMessage("905301234567", "Merhaba Dünya!");
        console.log(result);
    } catch (error) {
        console.error('Failed to send message:', error);
    }
})();

module.exports = sendWhatsAppMessage;