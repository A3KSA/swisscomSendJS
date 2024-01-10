class Send {
    constructor() {
        this.apiKeyReceive = ''
    }

    //function to set the API key
    setApiKey(apiKey) {
        this.apiKeyReceive = apiKey
    }

    /**
     * Gets the headers required for the Swisscom API requests.
     * @param {string} apiKey - The API key for the request.
     * @returns {Object} The headers for the request.
     */
    getHeaders() {
        return {
            "SCS-Version": "2",
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKeyReceive}`
        };
    }

    /**
     * Sends an SMS using the Swisscom API.
     * @async
     * @param {SMS} sms - The SMS object containing message details.
     * @param {function} callback - Callback function to process the result.
     */
    async sendSMS(sms, callback) {

        var url = `https://api.swisscom.com/messaging/sms`

        var response = await fetch(url, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(sms)
        })

        if (response.status === 201) {
            const messageId = response.headers.get("SCS-MessageId")
            callback(messageId)
        } else {
            const json = await response.json()
            throw new Error('Something went wrong with the Swisscom send API !', response.statusText);
        }
    }

    async getDeliveryStatus(messageId, callback) {
        var url = `https://api.swisscom.com/messaging/sms/${messageId}`

        var response = await fetch(url, {
            method: "GET",
            headers: this.getHeaders()
        })
        console.log(response)
        if (response.status === 200) {
            const json = await response.json()
            callback(json)
        } else {
            const json = await response.json()
            throw new Error('Something went wrong with the Swisscom get delivery status API !', response.statusText);
        }
    }


}

module.exports = Send;