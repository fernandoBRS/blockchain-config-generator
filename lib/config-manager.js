const fs = require('fs');
var Configuration = require('./models/configuration');
var ApplicationRoles = require('./models/application-roles');
var Workflow = require('./models/workflow');

class ConfigManager {
    constructor(contractsPath, contracts) {
        this.path = contractsPath;
        this.contracts = contracts;
    }
    
    createConfigFiles() {
        this.contracts.forEach((contract) => {
            var config = this.createConfig(contract);
            this.writeConfigFile(contract.title, config);
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

    writeConfigFile(title, config) {
        // Adding lines and indentation
        let data = JSON.stringify(config, null, 2);
        var fileName = `${this.path}/${title}.json`;

        fs.writeFileSync(fileName, data);  
    }
}

module.exports = ConfigManager;
