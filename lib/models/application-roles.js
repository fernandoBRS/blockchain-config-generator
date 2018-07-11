function isApplicationRole(item) {
    return item.constant == true && item.outputs.some(y => y.type == 'address');
}

function parseApplicationRole(item) {
    return {
        Name: item.name,
        Description: ''
    }
}

class ApplicationRoles {
    constructor(abi) {
       this.abi = abi;
    }

    getRoles() {
        return this.abi
            .filter(isApplicationRole)
            .map(parseApplicationRole);
    }
};

module.exports = ApplicationRoles;
