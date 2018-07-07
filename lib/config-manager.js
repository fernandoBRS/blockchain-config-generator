class ConfigManager {
    constructor(contracts) {
        this.contracts = contracts;
    }
    
    createConfigFiles() {
        this.contracts.forEach((contract) => {
            var config = this.createConfig(contract);

            console.log(config);
        });
    }

    createConfig(contract) {
        var config = {};
    
        config.ApplicationName = contract.title;
        config.DisplayName = contract.title;
        config.Description = contract.title;
        config.ApplicationRoles = this.getApplicationRoles(contract.content);

        return config;
    }
    
    
    /**
     * Returns a list of application roles associated to a smart contract.
     * Application roles are equivalent to Ethereum public addresses.
     * TODO: Get app roles through contract ABI.
     * @returns List of application roles.
     * @memberof ContractManager
     */
    getApplicationRoles(content) {
        var roles = [];
        return roles;
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
