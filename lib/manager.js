const Employee = require("./employee");

class Manager extends Employee {
    constructor(info) {
        super(info);
        this.officeNum = info.officeNum;
    }
    getOfficeNum() {
        return (this.officeNum);
    };
    getRole() {
        return ("Manager");
    };
}

module.exports = Manager;