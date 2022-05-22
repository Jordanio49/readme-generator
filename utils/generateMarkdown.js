const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return `![Adobe](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  if (license == 'MIT') {
    return `![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  if (license == 'IBM') {
    return `![IBM](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
  }
  if (license == 'Mozilla') {
    return `[Mozilla](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license == 'IBM') {
    return `https://opensource.org/licenses/IPL-1.0`
  }
  if (license == 'Mozilla') {
    return `https://opensource.org/licenses/MPL-2.0`
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 return `${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(fileName, data) {
  let readMe = `
  # ${data.title}
  
  ## Description
  ${renderLicenseBadge(data.license)} <br />
  ${data.description}
  
  ## Table of Contents
  1. [Installation Instructions](#installation-instructions)
  2. [Usage Information](#usage-information)
  3. [Contribution Guidelines](#contribution-guidelines)
  4. [Test Instructions](#test-instructions)
  5. [Licenses](#license)
  6. [Questions](#questions)
  
  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test Instructions
  ${data.test}

  ## License
  The License used for this project was ${renderLicenseSection(data.license)} <br />
  ${renderLicenseLink(data.license)}

  ## Questions
  Please reach out with any further questions.

  https://github.com/${data.github}

  email: ${data.email}
  `;

  fs.writeFile('./dist/README.md', readMe, (err) => {
    if(err) {
      throw err;
      // console.log('error', err);
    } else {
      // console.log('readme', 'file created!')
    }
  })
}

module.exports = generateMarkdown;
