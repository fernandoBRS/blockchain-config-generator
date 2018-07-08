var Configuration = require('./models/configuration');
var ApplicationRoles = require('./models/application-roles');
var Workflow = require('./models/workflow');

class ConfigManager {
    constructor(contracts) {
        this.contracts = contracts;
    }
    
    createConfigFiles() {
        this.contracts.forEach((contract) => {
            var config = this.createConfig(contract);

            console.log(JSON.stringify(config));
        });
    }

    createConfig(contract) {
        var config = new Configuration();
        var contracts = this.getContracts(contract.compiled.contracts);
      
        for (var contractName in contracts) {
            var abi = this.getContractAbi(contract.compiled, contractName);
            
            config.applicationRoles = new ApplicationRoles(abi).getRoles();
            config.workflows = new Workflow(contractName, abi);
        }
        
        return config;
    }

    /**
     * Returns all contracts except WorkbenchBase. 
     *
     * @param {*} contracts
     * @returns
     * @memberof ConfigManager
     */
    getContracts(contracts) {
        return Object.keys(contracts)
            .filter(key => key != ':WorkbenchBase')
            .reduce((obj, key) => {
                obj[key] = contracts[key];
                return obj;
            }, {});
    }

    getContractAbi(compiledContract, contractName) {
        var abi = compiledContract.contracts[contractName].interface;
        return JSON.parse(abi);
    }

    /**
     * Returns a list of workflows associated to a smart contract.
     * A workflow is a contract name.  
     * TODO: get contract name through solc.
     * @memberof ContractManager
     */
    getWorkflows() {
        var workflows = [];


        
        return workflows;
    }

    /**
     * Returns a list of workflows associated to a smart contract.
     * A workflow is a contract name.  
     * TODO: get contract name through solc.
     * @memberof ContractManager
     */
    getWorkflows() {
        var workflows = [];
        return workflows;
    }

    writeConfigFile() {

    }
}

module.exports = ConfigManager;
