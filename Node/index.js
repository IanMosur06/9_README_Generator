const inquirer = require('inquirer');
const fs = require('fs');
const generateLayout = require('./assets/readme.js');

const questions = [
    {
        type:'input',
        message:'What is your name?',
        name:'fname'
    },
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title'
    },
    {
        type:'input',
        message:'Give your project a short description',
        name:'description'
    },
    {
        type:'list',
        message:'Which license would you like to use?',
        choices: ["MIT", "Apache", "BSD", "mp License"],
        name:'license'
    },
    {
        type:'input',
        message:'How do you install your dependencies?',
        name:'installation'
    },
    {
        type:'input',
        message:'How do you run tests on your project?',
        name:'test'
    },
     {
        type:'input',
        message:'What does the user need to know about your repo?',
        name:'use'
    },
    {
        type:'input',
        message:'Who else helped in this project?',
        name:'contribution'
    },
    {
        type:'input',
        message:'What is your GitHub username?',
        name:'github'
    },
    {
        type:'input',
        message:'What is your email?',
        name:'email'
    }
  
]


function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log('README file saved under README.md')
    )
};

// init function in order to initialize inquirer
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateLayout(responses)));
};

init();