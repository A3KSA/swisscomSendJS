## SwisscomSendJS

### Installation

```bash
npm install @automation3000/swisscomsendjs
```

### Usage

```javascript

const {Send, SMS} = require('@automation3000/swisscomsendjs');

const send = new Send();

const sms = new SMS('0754301893', 'Hello World');

send.setApiKey('RHIeGeaUpY59iXaOE7vClcgHN66u')


async function sendSMS(sms) {

    try {
        sms.validate(sms);
        await send.sendSMS(sms);
    } catch (error) {
        console.log(error);
    }


}

sendSMS(sms);

```

Send is the main class, it contains the method sendSMS which takes a SMS object as parameter.
Before sending, you should provid a valid API key with the method setApiKey.

The SMS class takes two parameters, the phone number and the message. It also contains a validate method which throws an error if the phone number or the message is not valid.

