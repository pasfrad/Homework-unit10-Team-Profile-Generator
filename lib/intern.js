const Employee = require("./employee");

class Intern extends Employee {
    constructor(info) {
        super(info)
        this.school = info.school
    }
    getSchool() {
        return (this.school)
    };

    getRole() {
        return ("Intern")
    };
}

module.exports = Intern;