function isProperty(item) {
    return item.type == 'function' && item.outputs.length > 0;
}

function parseProperty(item) {
    return {
        Name: item.name,
        DisplayName: item.name,
        Description: 'TODO',
        Type: {
            Name: 'TODO'
        }
    }
}

class Workflow {
    constructor(contractName, abi) {
        this.Name = contractName;
        this.DisplayName = 'TODO';
        this.Description = 'TODO';
        this.Initiators = 'TODO';
        this.StartState = 'TODO';
        this.Properties = this.getProperties(abi);
        this.Constructor = {};
        this.Functions = [];
        this.States = [];
    }

    getProperties(abi) {
        return abi
            .filter(isProperty)
            .map(parseProperty);
    }
};

module.exports = Workflow;
