const Manager = require("../lib/manager");

describe("Manager class", () => {
    describe("getName method", () => {
        it("should return the name given to it as a new property", () => {

            const manager = new Manager({ name: "Sean" });

            expect(manager.getName()).toBe("Sean");

        });
    });
});

describe("Manager class", () => {
    describe("getId method", () => {
        it("should return the ID given to it as a new property", () => {

            const manager = new Manager({ id: "1995" });

            expect(manager.getId()).toBe("1995");

        });
    });
});

describe("Manager class", () => {
    describe("getGithub method", () => {
        it("should return the office number given to it as a new property", () => {

            const manager = new Manager({ officeNum: "pasfrad" });

            expect(manager.getOfficeNum()).toBe("pasfrad");

        });
    });
});

describe("Manager class", () => {
    describe("getEmail method", () => {
        it("should return the email address given to it as a new property", () => {

            const manager = new Manager({ email: "test@gmail.com" });

            expect(manager.getEmail()).toBe("test@gmail.com");

        });
    });
});

describe("Manager class", () => {
    describe("getRole method", () => {
        it("should return the type of employee, which is also the name of the class", () => {

            const manager = new Manager("Manager");

            expect(manager.getRole()).toBe("Manager");
        });
    });
});