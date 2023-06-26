var assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('cal', () => {
    it('calFunc', function () {
        assert.equal(calculateNumber(2.3, 4.5),7 );
        assert.equal(calculateNumber(15.78, 2.5), 19);
        assert.equal(calculateNumber(1.2, 0.2), 1);
        assert.equal(calculateNumber(3.5, 2.7), 7);
    })
    
    it('a', () => {
        assert.equal(calculateNumber(1.78, 2), 4);
        assert.equal(calculateNumber(1.2, 1), 2);
        assert.equal(calculateNumber(3.5, 2), 6);
    });

    it('b', () => {
        assert.equal(calculateNumber(2, 1.78), 4 );
        assert.equal(calculateNumber(0, 1.2), 1);
        assert.equal(calculateNumber(2, 3.5), 6);
    });
})