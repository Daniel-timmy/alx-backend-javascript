const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sinontest', function() {
    it('stub', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleLogSpy = sinon.spy(console, 'log');
        const result = sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');

    })
})