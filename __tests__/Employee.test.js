const Employee = require("../lib/Employee")

describe("Employee", () => {
    // Test for creating a new Employee instance
    describe("Initialization", () => {
        it("should create an object with a name, id, and email with getters", () => {
            const employee = new Employee("Stumpy", 1, 'stumpy@mail.com');

            // Verify that the new object has the correct properties
            expect(employee.name).toBe("Stumpy");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('stumpy@mail.com');
        });
        it("should throw an error if not provided any arguments", () => {
            // wrap the object initialization in a cb function 
            const cb = () => new Employee();

            //verify that an error was thrown in cb
            expect(cb).toThrow();
        })
        it("should throw an error if 'name' is not a string", () => {
            // wrap the object initialization in a cb function 
            const cb = () => new Employee(1,1, "stumpy@email.com");

            // defines the error to be thrown
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            //verify that the correct error was thrown when the cb is executed
            expect(cb).toThrowError(err);
        })
        it("should throw an error if 'id' is not a number", () => {
            // wrap the object initialization in a cb function 
            const cb = () => new Employee("Stumpy", '0', "stumpy@email.com");

            const err = new Error("Expected parameter 'id' to be a non-negative number");


            //verify that an error was thrown in cb
            expect(cb).toThrowError(err);
        })
        it("should throw an error 'email' is not a string", () => {
            // wrap the object initialization in a cb function 
            const cb = () => new Employee('stumpy', 1, 1);

            const err = new Error("expected parameter 'email' to be a non-empty string");
            //verify that an error was thrown in cb
            expect(cb).toThrowError(err);
        })
        it("should throw an error if not provided an email", () => {
            // wrap the object initialization in a cb function 
            const cb = () => new Employee('stumpy', 1);

            const err = new Error("expected parameter 'email' to be a non-empty string");
            //verify that an error was thrown in cb
            expect(cb).toThrowError(err);
        })
    
    
    });
    // Test for getters
    describe("getters", () => {
        it("should return an employees name", () => {
            // initialize new employee
            const employee = new Employee('Stumpy', 1, 'stumpy@email.com');

            // expect getName to return 'Stumpy'
            expect(employee.getName).toEqual('Stumpy');
        });
        it("should return an employees id", () => {
            // initialize new employee
            const employee = new Employee('Stumpy', 1, 'stumpy@email.com');

            // expect getId to return 1
            expect(employee.getId).toEqual(1);
        });
        it("should return an employees email", () => {
            // initialize new employee
            const employee = new Employee('Stumpy', 1, 'stumpy@email.com');

            // expect getEmail to return 'stumpy@email.com'
            expect(employee.getEmail).toEqual('stumpy@email.com');
        });
    })


})