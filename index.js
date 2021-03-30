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
                name: 'licence',
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

const badgeLicence = (response) => {
    
    var badge;

    if (response.licence == "GNU AGPLv3") {
        badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    }
    else if (response.licence == "GNU GPLv3") {
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    else if (response.licence == "GNU LGPLv3") {
        badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    }
    else if (response.licence == "Mozilla Public License 2.0") {
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    else if (response.licence == "Apache License 2.0") {
        badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (response.licence == "MIT License") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (response.licence == "Boost Software License 1.0") {
        badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
    else if (response.licence == "The Unlicense") {
        badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
    return badge;
};

const createReadme = (response) => `
# ${response.title}
${badgeLicence(response)}
## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${response.install}
## Usage
${response.usage}
## Contributing
${response.credits}
## Tests
${response.test}
## License
This project is using the ${response.licence} licence. For further information, please visit [here](https://choosealicense.com/licenses/).
## Questions
Please reach out with any questions you may have! 
Here are some ways you can connect with me:  
GitHub: [${response.username}](https://github.com/${response.username})  
Email: <${response.email}>`;

function init() {
    questions()
    .then((response) => fs.writeFile('Readme.md', createReadme(response), (err) =>
    err ? console.error(err) : console.log('Readme file was successfully created!')));
}

init();
