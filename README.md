# Send a Message Using Node.js with Maytapi WhatsApp API

This repository demonstrates how to send a WhatsApp message using Node.js and the Maytapi WhatsApp API. Maytapi provides a powerful and easy-to-use API for integrating WhatsApp messaging into your applications.

## Features

- Send text messages to WhatsApp numbers
- Easy integration with Maytapi WhatsApp API
- Configurable settings for API credentials
- Modern JavaScript features (async/await, ES6+)

## Requirements

- Node.js 12.0 or higher
- npm (Node Package Manager)
- Maytapi account and API credentials

## Installation
1. Clone this repository:<br/>
```
https://github.com/maytapi-com/send-a-message-with-nodejs-using-whatsapp-api.git
cd project-folder
```
2. Install dependencies:<br/>
```
npm i
```
3. Edit `src/config.js` and add your Maytapi credentials:
```javascript
module.exports = {
    PRODUCT_ID: 'your_product_id',
    PHONE_ID: 'your_phone_id',
    API_KEY: 'your_api_key'
};
```

## Usage 
To send a test message:
```bash
node src/sendMessage.js
```
To use in your own project:
1. Import the sendWhatsAppMessage function:
```javascript
const sendWhatsAppMessage = require('./src/sendMessage');
```
2. Use the function in your code:
```javascript
sendWhatsAppMessage("905301234567", "Hello World!")
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

> [!NOTE]
> **To perform all these operations correctly, you need to register with maytapi.com, get the credentials, and place them in the config file..**


## Why Maytapi?

[Maytapi](https://maytapi.com) offers a robust WhatsApp API solution with features like:

- Multi-device support
- Affordable pricing
- Easy integration
- Comprehensive documentation

Learn more about Maytapi's [WhatsApp API](https://maytapi.com) and how it can benefit your projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions about Maytapi's WhatsApp API, visit their [official documentation](https://maytapi.com/whatsapp-api-documentation) or contact their support team.
