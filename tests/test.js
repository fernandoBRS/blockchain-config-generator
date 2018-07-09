var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var ContractManager = require('../lib/contract-manager');

let contractsPath;

beforeEach(async () => {
    contractsPath = `${process.cwd()}/tests/`;
});

describe('Contract manager', () => {
    it('expect return false if file extension was not found in the directory', () => {
        var contractManager = new ContractManager(contractsPath, '.sol1');
        var existsAnyFile = contractManager.existsAnyFile();
        
        expect(existsAnyFile).to.be.false;
    });

    it('expect return true if any .sol file was found in the directory', () => {
        var contractManager = new ContractManager(contractsPath, '.sol');
        var existsAnyFile = contractManager.existsAnyFile();
        
        expect(existsAnyFile).to.be.true;
    });
});
