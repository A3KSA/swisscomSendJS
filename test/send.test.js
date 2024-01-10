const nock = require('nock');
const Send = require('../src/send');

describe('getDeliveryStatus', () => {
    let send;
    let messageId;
    let callback;

    beforeEach(() => {
        send = new Send();
        messageId = '12345';
        callback = jest.fn();
    });


    it('should call the callback with the response when the status is 200', async () => {
        const response = {
            status: 200
        };

        nock('https://api.swisscom.com')
            .get(`/messaging/sms/${messageId}`)
            .reply(200, response);

        await send.getDeliveryStatus(messageId, callback);

        expect(callback).toHaveBeenCalledWith(response);
    });

    it('should throw an error when the status is not 200', async () => {
        const response = {
            error: 'Something went wrong'
        };

        nock('https://api.swisscom.com')
            .get(`/messaging/sms/${messageId}`)
            .reply(400, response);

        await expect(send.getDeliveryStatus(messageId, callback)).rejects.toThrow('Something went wrong with the Swisscom get delivery status API !');
    });
});