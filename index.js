const inquirer = require("inquirer");
// const fs = require("fs");
const Engineer = ("./lib/Engineer");
const Intern = ("./lib/Intern");
const Manager = ("./lib/Manager");

const Team = [];




function makeTeam() {
inquirer.prompt([
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            name: 'mainMenu',
            choices: ["Manager", "Engineer", "Intern", "No-one"]
        },
    ]).then(function (choice) {
        switch (choice.menu) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            case "No-one":
                buildHTML();
        }
    }
    )
}


    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Input manager's name:"
              },
          
              {
                type: "input",
                name: "id",
                message: "Input manager's ID number:"
              },
          
              {
                type: "input",
                name: "email",
                message: "Input manager's email:"
              },
          
              {
                type: "input",
                name: "office",
                message: "Enter manager's office number:"
              }

        ]).then(input => {
            const manager = new Manager(input.name, input.id, input.email, input.office);
            Team.push(manager);
            makeTeam();  
        }         
            
        )};

        function addEngineer() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Input engineer's name:"
                  },
              
                  {
                    type: "input",
                    name: "id",
                    message: "Input engineer's ID number:"
                  },
              
                  {
                    type: "input",
                    name: "email",
                    message: "Input engineer's email:"
                  },
              
                  {
                    type: "input",
                    name: "github",
                    message: "Enter engineer's Github username:"
                  }
    
            ]).then(input => {
                const engineer = new Engineer(input.name, input.id, input.email, input.github);
                Team.push(engineer);
                makeTeam();  
            }         
                
            )};

            function addIntern() {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Input intern's name:"
                      },
                  
                      {
                        type: "input",
                        name: "id",
                        message: "Input intern's ID number:"
                      },
                  
                      {
                        type: "input",
                        name: "email",
                        message: "Input intern's email:"
                      },
                  
                      {
                        type: "input",
                        name: "school",
                        message: "Enter intern's school name:"
                      }
        
                ]).then(input => {
                    const intern = new Intern(input.name, input.id, input.email, input.school);
                    Team.push(intern);
                    makeTeam();  
                }         
                    
                )};