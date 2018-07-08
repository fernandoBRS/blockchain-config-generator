class Configuration {
    constructor() {
       this.ApplicationName = 'TODO';
       this.DisplayName = 'TODO';
       this.Description = 'TODO';
       this.ApplicationRoles = [];
       this.Workflows = [];
    }
 
    set applicationName(value) {
       this.ApplicationName = value;
    }

    set applicationRoles(value) {
        this.ApplicationRoles.push.apply(this.ApplicationRoles, value);
    }

    set workflows(value) {
        this.Workflows.push(value);
    }
};

module.exports = Configuration;
