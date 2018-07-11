function isProperty(item) {
    return item.type == 'function' && item.outputs.length > 0;
}

function parseProperty(item) {
    return {
        Name: item.name,
        DisplayName: item.name,
        Description: 'TODO',
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
        Description: 'TODO',
        DisplayName: 'TODO',
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
        DisplayName: item.name,
        Description: 'TODO',
        Parameters: item.inputs.map(parseFunctionParameter)
    }
}

function parseFunctionParameter(input) {
    return {
        Name: input.name,
        DisplayName: input.name,
        Description: 'TODO',
        Type: {
            Name: input.type
        }
    }
}

class Workflow {
    constructor(contractName, abi) {
        // Removing the ':' character that came from contract ABI
        this.Name = contractName.substr(1);
        this.DisplayName = 'TODO';
        this.Description = 'TODO';
        this.Initiators = ['TODO'];
        this.StartState = 'TODO';
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
                Name: 'TODO',
                DisplayName: 'TODO',
                Description: 'TODO',
                PercentComplete: 0,
                Value: 0,
                Style: 'TODO',
                Transitions: [
                    {
                        AllowedRoles: [],
                        AllowedInstanceRoles: [],
                        Description: 'TODO',
                        Function: 'TODO',
                        NextStates: [],
                        DisplayName: 'TODO'
                    }
                ]
            }
        ]
    }
};

module.exports = Workflow;
