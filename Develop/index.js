// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('file-system');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What is the description of your project?", "Which kind of license will you be using?","What are the installation instructions for your project?", "What is the usage information for your project?", "What are the contribution guidelines for your project?", "What are the test instructions for your project?", "What is your GitHub username?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a title for your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: questions[1],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a description for your project.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: questions[2],
            choices: ["MIT", "Apache", "GPL", "BSD", "None"]
        },
        {
            type: "input",
            name: "installation",
            message: questions[3],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter installation instructions for your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: questions[4],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter usage information for your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contribution",
            message: questions[5],
        },
        {
            type: "input",
            name: "test",
            message: questions[6],
        },
        {
            type: "input",
            name: "github",
            message: questions[7],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: questions[8],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter your email address.");
                    return false;
                }
            }
        }
    ]).then(answers => {
        writeToFile("README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
