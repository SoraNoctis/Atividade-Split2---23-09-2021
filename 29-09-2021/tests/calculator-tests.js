const chai = require('chai');
const expect = chai.expect;
const expect = chai.assert;
const Calculator = require('../src/calculator.js')

describe("The Calculator", () => {

    before(() => { Calculator = new Calculator });

    it("Should sum two posirive integers", () => {
        expect(Calculator.sum(2, 3)).to.equal(5);
    });

    it("Deve somar um negativo e um positivo", () => {
        expect(Calculator.sum(-2, 3)).to.equal(1);
    });

    it("Deve somar 49 com 50 e retornar 99", () => {
        expect(Calculator.sum(49, 50)).to.equal(99);
        expect(Calculator.sum(49, 50)).to.be.a("number");
        expect(Calculator.sum(49, 50)).to.not.be.equal(98);
        expect(Calculator.sum(49, 50)).to.not.be.null;
        assert.isNotString(Calculator.sum(49, 50))

    });
});
