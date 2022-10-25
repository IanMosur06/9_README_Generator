const inquirer = require('inquirer')
const fs = require('fs')


inquirer
.prompt ([
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title'
    },
    {
        type:'input',
        message:'Give your project a description',
        name:'description'
    },
    {
        type:'input',
        message:'What is your User Story?',
        name:'userStory'
    },
    {
        type:'input',
        message:'What is your Acceptence Criteria?',
        name:'acceptence'
    },
    {
        type:'input',
        message:'How do you use your project?',
        name:'installation'
    },
    {
        type:'input',
        message:'What is your GitHub username?',
        name:'github'
    },
    {
        type:'list',
        message:'Are you using a license?',
        choices: ["MIT", "Apache", "BSD", "mp License"],
        name:'license'
        
    }
])


fs.writeFile('README.md', generateReadme, (err) => {
    err ? console.log(err): console.log("README.md created!");;
})
})