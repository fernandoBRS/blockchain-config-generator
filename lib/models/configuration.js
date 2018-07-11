class Configuration {
    constructor() {
       this.ApplicationName = '';
       this.DisplayName = '';
       this.Description = '';
       this.ApplicationRoles = [];
       this.Workflows = [];
    }
 
    set applicationName(value) {
       this.ApplicationName = value;
    }

    set applicationRoles(value) {
        var roles = this.ApplicationRoles.concat(value);
        this.ApplicationRoles = roles;
    }

    set workflows(value) {
        this.Workflows.push(value);
    }
};

module.exports = Configuration;
