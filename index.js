// TODO: Include packages needed for this application
// using inquirer for the prompts abd the generate markdown is where the markdown language for the readme will go
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            // each prompt is checking for user input. if they accidentally forget to enter information on any prompt it will let them know and send them back to that question
            type: 'input',
            name: 'title',
            message: "What is your Project's title?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a concise description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please include the installation instructions for this project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter the usage information for this project.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please define the contribution guidelines for this project.',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please include the testing instructions for this project.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter testing instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use for your project?',
            choices: ['Mozilla', 'MIT', 'IBM', 'Apache'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter testing instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter a valid email address at which you can be reached.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter testing instructions for your project!');
                    return false;
                }
            }
        }
    ])
        .then(answers => {
            writeToFile('README.md', answers)
        });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
