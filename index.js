const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Please provide a brief description of your project:',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Please provide a step-by-step description of how to install your project:',
                name: 'install',
            },
            {
                type: 'input',
                message: 'Please provide directions and examples for use:',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Please list contributors to this project, if any:',
                name: 'credits',
            },
            {
                type: 'input',
                message: 'Please write any tests for your project:',
                name: 'test',
            },
            {
                type: 'list',
                message: 'Please select a licence from the list:',
                choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 
                'Mozilla Public License 2.0', 'Apache License 2.0', 
                'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
                name: 'test',
            },
            {
                type: 'input',
                message: 'Please enter your GitHub username:',
                name: 'username',
            },
            {
                type: 'input',
                message: 'Please enter your email address:',
                name: 'email',
            },
        ])
}

const createReadme = (response) =>
   `# ${response.title}

   ## Description
   ${response.description}
   ## Table of Contents:
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   ## Installation
   ${response.install}
   ## Usage
   ${response.usage}
   ## Credits
   ${response.credits}
   ## Test
   ${response.test}
   ## License
   ${response.licence}
   ## Questions
   Please reach out with any questions! Ways you can connect with me:
   GitHub: ${response.username}
   Email: ${response.email}`;

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((response) => fs.writeFile('Readme.md', createReadme(response), (err) =>
    err ? console.error(err) : console.log('Readme file was successfully created!')));
}

// Function call to initialize app
init();
