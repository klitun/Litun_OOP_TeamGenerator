
//Manager

const buildManager = (manager) => {
    return `
<div class="card" style="width: 18rem; margin: 15px;">
    <div class="card-body bg-info">
      <h5 class="card-title text-center"> ${manager.getName()} </h5>
      <h6 class="card-subtitle mb-2 text-white text-center"> ${manager.getRole()} </h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()} </a></li>
        <li class="list-group-item">Office #: ${manager.getOffice()} </li>
      </ul>
    </div>
  </div>
  `
};


//Engineer 

const buildEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem; margin: 15px;">
    <div class="card-body bg-warning">
      <h5 class="card-title text-center"> ${engineer.getName()} </h5>
      <h6 class="card-subtitle mb-2 text-white text-center"> ${engineer.getRole()} </h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${engineer.getId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
  `
}

//Intern


const buildIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem; margin: 15px;">
    <div class="card-body bg-success">
      <h5 class="card-title text-center">${intern.getName()} </h5>
      <h6 class="card-subtitle mb-2 text-white text-center">${intern.getRole()} </h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${intern.getId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School:${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

const makeEmployee = (emp) =>{
  switch (emp.getRole()) {
    case "Manager":
      return buildManager(emp);
      break;

      case "Engineer":
        return buildEngineer(emp);
        break;

        case "Intern":
      return buildIntern(emp);
      break;
  
    default:
      break;
  }
}


//The page

const makeHTML =(Team)=> {
const teamCards = Team.map(member => makeEmployee(member)).join('')
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
    <div class="jumbotron bg-secondary">
    <h1 class="display-4 text-center text-white"> The Team </h1>
    <p class="lead text-center text-white">Generated with Inquirer</p>
    <hr class="my-4">
    </div>     
    
    <div class="card-group"> 

    ${teamCards}    
   
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    
    </body>
    </html>
    `;
};

module.exports = makeHTML; 