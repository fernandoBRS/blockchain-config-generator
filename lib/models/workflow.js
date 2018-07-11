function isProperty(item) {
    return item.type == 'function' && item.outputs.length > 0;
}

function parseProperty(item) {
    return {
        Name: item.name,
        DisplayName: item.name,
        Description: '',
        Type: {
            Name: item.outputs[0].type
        }
    }
}

function isConstructor(item) {
    return item.type == 'constructor';
}

function parseParameter(item) {
    return {
        Name: item.name,
        Description: '',
        DisplayName: '',
        Type: {
            Name: item.type
        }
    }
}

function isFunction(item) {
    return item.constant == false && item.type == 'function' && item.outputs.length == 0;
}

function parseFunction(item) {
    return {
        Name: item.name,
        DisplayName: '',
        Description: '',
        Parameters: item.inputs.map(parseFunctionParameter)
    }
}

function parseFunctionParameter(input) {
    return {
        Name: input.name,
        DisplayName: '',
        Description: '',
        Type: {
            Name: input.type
        }
    }
}

class Workflow {
    constructor(contractName, abi) {
        // Removing the ':' character that came from contract ABI
        this.Name = contractName.substr(1);
        this.DisplayName = '';
        this.Description = '';
        this.Initiators = [''];
        this.StartState = '';
        this.Properties = this.getProperties(abi);
        this.Constructor = this.getConstructor(abi);
        this.Functions = this.getFunctions(abi);
        this.States = this.getStates(abi);
    }

    getProperties(abi) {
        return abi.filter(isProperty).map(parseProperty);
    }

    getConstructor(abi) {
        var constructor = abi.find(isConstructor);

        var parameters = {
            Parameters: constructor.inputs.map(parseParameter)
        };

        return parameters;
    }

    getFunctions(abi) {
        return abi.filter(isFunction).map(parseFunction);
    }

    getStates(abi) {
        return [
            {
                Name: '',
                DisplayName: '',
                Description: '',
                PercentComplete: 0,
                Value: 0,
                Style: '',
                Transitions: [
                    {
                        AllowedRoles: [],
                        AllowedInstanceRoles: [],
                        Description: '',
                        Function: '',
                        NextStates: [],
                        DisplayName: ''
                    }
                ]
            }
        ]
    }
};

module.exports = Workflow;
