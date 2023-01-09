const { default: inquirer } = require("inquirer");
const { writeFile } = require('fs').promises;

const getManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'manager',
                message: "Enter team manager's name"
            },
            {
                type: 'input',
                name: "id",
                message: "Enter manager's id",
            },
            {
                type: 'input',
                name: "email",
                message: "Enter manager's email",
            },
            {
                type: 'input',
                name: "office",
                message: "Enter manager's office number ",
            },
        ])
        .then((answers) => 
            fs
        );
};
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team member's name",
        },
        {
            type: 'input',
            name: "id",
            message: "Enter team member's id",
        },
        {
            type: 'input',
            name: "email",
            message: "Enter team member's email",
        },
        {
            type: 'input',
            name: "email",
            message: "Enter team member's email",
        },
        {
            type: 'list',
            name: "role",
            message: "Select team member's role",
            choices: ['Engineer', 'Intern'],
        },
        
    ])
    .then((answers) => 
        fs
    );
