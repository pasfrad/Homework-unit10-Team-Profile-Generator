const Employee = require("../lib/employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("should return the name given to it as a new property", () => {

            const employee = new Employee({ name: "Sean" });

            expect(employee.getName()).toBe("Sean");

        });
    });
});

describe("Employee class", () => {
    describe("getId method", () => {
        it("should return the ID given to it as a new property", () => {

            const employee = new Employee({ id: "1995" });

            expect(employee.getId()).toBe("1995");

        });
    });
});

describe("Employee class", () => {
    describe("getEmail method", () => {
        it("should return the email address given to it as a new property", () => {

            const employee = new Employee({ email: "test@gmail.com" });

            expect(employee.getEmail()).toBe("test@gmail.com");

        });
    });
});

describe("Employee class", () => {
    describe("getRole method", () => {
        it("should return the type of employee, which is also the name of the class", () => {

            const employee = new Employee("Employee");

            expect(employee.getRole()).toBe("Employee");
        });
    });
});