const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
    describe("getName method", () => {
        it("should return the name given to it as a new property", () => {

            const engineer = new Engineer({ name: "Sean" });

            expect(engineer.getName()).toBe("Sean");

        });
    });
});

describe("Engineer class", () => {
    describe("getId method", () => {
        it("should return the ID given to it as a new property", () => {

            const engineer = new Engineer({ id: "1995" });

            expect(engineer.getId()).toBe("1995");

        });
    });
});

describe("Engineer class", () => {
    describe("getGithub method", () => {
        it("should return the Github given to it as a new property", () => {

            const engineer = new Engineer({ github: "pasfrad" });

            expect(engineer.getGithub()).toBe("pasfrad");

        });
    });
});

describe("Engineer class", () => {
    describe("getEmail method", () => {
        it("should return the email address given to it as a new property", () => {

            const engineer = new Engineer({ email: "test@gmail.com" });

            expect(engineer.getEmail()).toBe("test@gmail.com");

        });
    });
});

describe("Engineer class", () => {
    describe("getRole method", () => {
        it("should return the type of employee, which is also the name of the class", () => {

            const engineer = new Engineer("Engineer");

            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});