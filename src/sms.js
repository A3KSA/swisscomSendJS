/**
 * @classdesc Represents an SMS message.
 */
class SMS {
    /**
     * @constructor
     * @param {string} to - The recipient of the SMS.
     * @param {string} message - The content of the SMS.
     */
    constructor(to, message) {
        this.to = to || '';
        this.message = message || '';
    }

    //setter for the message
    setMessage(message) {
        this.message = message;
    }

    //setter for the recipient
    setRecipient(to) {
        this.to = to;
    }

    /**
     * Validates the SMS object.
     * @returns {boolean} True if the SMS object is valid.
     * @throws {Error} If the SMS object is invalid.
     * 
        */
    validate() {
        if (this.to === '') {
            throw new Error('No recipient specified');
        }
        if (this.message === '') {
            throw new Error('No message specified', {cause: 'EMPTY_MESSAGE'});
        }
        return true;
    }

}

module.exports = SMS;