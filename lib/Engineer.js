
const Employee = require('./Employee');
//Brings in the basic employee info from Employee js

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

//export engineer information

module.exports = Engineer;