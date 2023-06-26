const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sinonpayment', function() {
    it('spy', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        const result = sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
    })
})

