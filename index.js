// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = () => {
    // if(!data){
    //     data = {}
    // }
    return inquirer.prompt([
        {
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
        // table of contents will be within the readme.md already
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
            name: 'licenses',
            message: 'Which license would you like to use for your project?',
            choices: ['MIT', 'more licenses', 'even more', 'and another']
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
    // .then(data => {
    //     return questions(data);
    // });
};

questions()
.then(answers => {
    console.log(answers);
    console.log(answers.title)
    console.log(answers.github)
    console.log(answers.email)
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(fileName, data, err => {
    //     // conditional if error, else
    // })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
