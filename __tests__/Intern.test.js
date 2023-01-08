const Intern = require("../lib/Intern");

describe("Intern", () => {

    describe("Initialization", () => {
        it('should create an object with name, id, email, and school with getters', () => {
            const intern = new Intern('Stumpy', 1, 'stumpy@email.com', 'OSU');

            expect(intern.name).toEqual('Stumpy');
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual('stumpy@email.com');
            expect(intern.school).toEqual('OSU');
        });
        it("should throw an error if arguments are provided", () => {
            const cb = () => new Intern();

            expect(cb).toThrow();
        })
        it("should throw an error if 'school' is not a string", () => {
            const cb = () => new Intern('Stumpy', 1, 'stumpy@email.com', 1);

            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        })
    })
    describe("getters", () => {
        it("should return 'Intern'", () => {
            const intern = new Intern('Stumpy', 1, 'stumpy@email.com', 'OSU');

            expect(intern.getRole()).toEqual('Intern');
        })
        it("should return interns school", () => {
            const intern = new Intern('Stumpy', 1, 'stumpy@email.com', 'OSU');

            expect(intern.getSchool()).toEqual('OSU');
        })
    })
})