const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    describe("Initialization", () => {
        it('should create an object with name, id, email, and github with getters', () => {
            const engineer = new Engineer('Stumpy', 1, 'stumpy@email.com', 'stumpy');

            expect(engineer.name).toEqual('Stumpy');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('stumpy@mail.com');
            expect(engineer.github).toEqual('stumpy');
        });
        it("should throw an error if arguments are provided", () => {
            const cb = () => new Engineer();

            expect(cb).toThrow();
        })
        it("should throw an error if 'github' is not a string", () => {
            const cb = () => new Engineer('Stumpy', 1, 'stumpy@email.com', 1);

            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        })
    })
    describe("getters", () => {
        it("should return 'Engineer'", () => {
            const engineer = new Engineer('Stumpy', 1, 'stumpy@email.com', 'stumpy');

            expect(engineer.getRole()).toEqual('Engineer');
        })
        it("should return engineers github username", () => {
            const engineer = new Engineer('Stumpy', 1, 'stumpy@email.com', 'stumpy');

            expect(engineer.getGithub()).toEqual('stumpy');
        })
    })
})