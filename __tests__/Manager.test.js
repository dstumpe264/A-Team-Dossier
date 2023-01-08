const Manager = require("../lib/Manager");

describe("Manager", () => {

    describe("Initialization", () => {
        it('should create an object with name, id, email, and officeNumber with getters', () => {
            const manager = new Manager('Stumpy', 1, 'stumpy@email.com', 1);

            expect(manager.name).toEqual('Stumpy');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('stumpy@email.com');
            expect(manager.officeNumber).toEqual(1);
        });
        it("should throw an error if arguments are provided", () => {
            const cb = () => new Manager();

            expect(cb).toThrow();
        })
        it("should throw an error if 'github' is not a string", () => {
            const cb = () => new Manager('Stumpy', 1, 'stumpy@email.com', 'string');

            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        })
    })
    describe("getters", () => {
        it("should return 'Manager'", () => {
            const manager = new Manager('Stumpy', 1, 'stumpy@email.com', 1);

            expect(manager.getRole()).toEqual('Manager');
        })
    })
})