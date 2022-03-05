const Employee = require("./employee");

class Engineer extends Employee {
    constructor(info) {
        super(info)
        this.github = info.github
    }
    getGithub() {
        return (this.github);
    };
    getRole() {
        return ("Engineer");
    };
}

module.exports = Engineer;