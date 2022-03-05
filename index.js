const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generate = require('./dist/generateHTML');

let allEmployees = []

const askManager = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the team manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the team manager's email address?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOffice"
    },
]).then(({ managerName, managerId, managerEmail, managerOffice }) => {
    let manager = new Manager({ name: managerName, id: managerId, email: managerEmail, officeNum: managerOffice });
    allEmployees.push(manager);
});
}

const askOtherTeamMembers = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team members'],
            name: "nextAdd"
        },
    ]).then(({nextAdd}) => {
        if (nextAdd == 'Engineer') {
          askEngineer().then(askOtherTeamMembers);
        } else if (nextAdd == 'Intern'){
          askIntern().then(askOtherTeamMembers);
        } else {
            console.log(allEmployees)
            writeHTMLToFile();
            return;
        }
      });
}

const askEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is the engineer's Github username?",
            name: "engineerGithub"
        },
    ]).then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
        let engineer = new Engineer({ name: engineerName, id: engineerId, email: engineerEmail, github: engineerGithub });
        allEmployees.push(engineer);
    });
}

const askIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "internSchool"
        },
    ]).then(({ internName, internId, internEmail, internSchool }) => {
        let intern = new Intern({ name: internName, id: internId, email: internEmail, school: internSchool });
        allEmployees.push(intern);
    });
}

const writeHTMLToFile = (() => fs.writeFileSync('./dist/index.html', generate(allEmployees), (err) =>
    err ? console.error(err) : console.log("Your HTML file is being created"))
);

askManager().then(() => {
    askOtherTeamMembers();
});