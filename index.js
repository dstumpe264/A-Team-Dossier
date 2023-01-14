const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;
const  generateHtml = require('./src/generateHtml');
const open = require('open');
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

var team = [];




function getManager() {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Enter team manager's name"
            },
            {
                type: 'input',
                name: "managerId",
                message: "Enter manager's id",
            },
            {
                type: 'input',
                name: "managerEmail",
                message: "Enter manager's email",
            },
            {
                type: 'input',
                name: "managerOffice",
                message: "Enter manager's office number ",
            },
            {
                type: 'confirm',
                name: 'add',
                message: 'Would you like to add an employee?',
                default: false
            }
        ]);
        
};

function addEmployee() {
    return inquirer.prompt([
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
                type: 'list',
                name: "role",
                message: "Select team member's role",
                choices: ['Engineer', 'Intern'],
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter team member's github username",
                when: (answers) => answers.role === 'Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter team member's school",
                when: (answers) => answers.role === 'Intern'
            },
            {
                type: 'confirm',
                name: 'add',
                message: 'Would you like to add an employee?',
                default: false
            }
            
        ])
        .then((answers) => {
            if (answers.role === "Intern"){
                var employee = new Intern(answers.name, +answers.id, answers.email, answers.school);
                
            } else {
                var employee = new Engineer(answers.name, +answers.id, answers.email, answers.github);
            }
            team.push(employee);
            if(answers.add){
                addEmployee();
            } else {
                writeFile('index.html', generateHtml(team))

            }
        })
}


const init = () => {
    getManager()
        .then((answers) => { 
            const { managerName, managerId, managerEmail, managerOffice, add} = answers;
            var manager = new Manager(managerName, +managerId, managerEmail, +managerOffice);
            team.push(manager);
            if(add){
                addEmployee();
            } else {
                writeFile('index.html', generateHtml(team))
            }
        });
};

init();