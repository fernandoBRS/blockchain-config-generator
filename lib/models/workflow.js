class Workflow {
    constructor(contractName, abi) {
        this.Name = contractName;
        this.DisplayName = 'TODO';
        this.Description = 'TODO';
        this.Initiators = 'TODO';
        this.StartState = 'TODO';
        this.Properties = [];
        this.Constructor = {};
        this.Functions = [];
        this.States = [];
     }
  
     set applicationName(value) {
        this.ApplicationName = value;
     }

     getWorkflowProperties() {
        var properties = [];

        return properties;
    }
};

module.exports = Workflow;
