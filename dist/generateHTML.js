function makeCard(employee) {
    let card;
    if (employee.getRole() == 'Manager'){
        card = `<div class="container w-95 border-bottom mt-5">
    <h5>Team Members</h5>
</div>
<div class="container mt-4">
    <div class="card">
        <div class="card-body bg-info">
            <h5 class="card-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Manager Name: ${employee.getName()}</li>
            <li class="list-group-item">Manager ID: ${employee.getId()}</li>
            <li class="list-group-item">Office Number: ${employee.getOfficeNum()}</li>
        </ul>
        <div class="card-body card-link">
            Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
        </div>
    </div>
</div>`
    } else if (employee.getRole() == 'Engineer'){
        card = `<div class="container mt-4">
        <div class="card">
        <div class="card-body bg-info">
            <h5 class="card-title">Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${employee.getName()}</li>
            <li class="list-group-item">Employee ID: ${employee.getId()}</li>
        </ul>
        <div class="card-body card-link">
            Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
        </div>
        <div class="card-body card-link">
            Engineer Github: <a href=github.com/${employee.getGithub()}</li>
        </div>`
    } else {
        card = `<div class="container mt-4">
    <div class="card">
        <div class="card-body bg-info">
            <h5 class="card-title">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${employee.getName()}</li>
            <li class="list-group-item">Employee ID: ${employee.getId()}</li>
            <li class="list-group-item">Engineer Github: ${employee.getSchool()}</li>
        </ul>
        <div class="card-body card-link">
            Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
        </div>
        </div>`
    };
return card;
}

function generateHTML(data) {
    let htmlOutput = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg bg-danger text-white">
            <div class="container-fluid">
                <div class="nav-item col-12 col-md-4 display-4">
                    <h1 class="navbar-brand">Team Members</h1>
                </div>
            </div>
        </nav>
        <div>`;
            data.forEach((employee) => {
                htmlOutput = htmlOutput + makeCard(employee);
        
            })
            htmlOutput = htmlOutput +
        `</div`;

    return htmlOutput;
}

module.exports = generateHTML;