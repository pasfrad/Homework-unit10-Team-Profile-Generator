const Intern = require("../lib/intern");

describe("Intern class", () => {
    describe("getName method", () => {
        it("should return the name given to it as a new property", () => {

            const intern = new Intern({ name: "Sean" });

            expect(intern.getName()).toBe("Sean");

        });
    });
});

describe("Intern class", () => {
    describe("getId method", () => {
        it("should return the ID given to it as a new property", () => {

            const intern = new Intern({ id: "1995" });

            expect(intern.getId()).toBe("1995");

        });
    });
});

describe("Intern class", () => {
    describe("getEmail method", () => {
        it("should return the email address given to it as a new property", () => {

            const intern = new Intern({ email: "test@gmail.com" });

            expect(intern.getEmail()).toBe("test@gmail.com");

        });
    });
});

describe("Intern class", () => {
    describe("getRole method", () => {
        it("should return the type of employee, which is also the name of the class", () => {

            const intern = new Intern("Intern");

            expect(intern.getRole()).toBe("Intern");
        });
    });
});

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("should return the school given to it as a new property", () => {

            const intern = new Intern({ school: "test@gmail.com" });

            expect(intern.getSchool()).toBe("test@gmail.com");

        });
    });
});