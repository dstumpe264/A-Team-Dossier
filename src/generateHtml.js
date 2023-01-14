

function generateCards(member) {
    if (member.getRole() === "Manager") {
       return `<h1><li>${member.getRole()}</li></h1>
                    <li>ID: ${member.getId()}</li>
                    <li>Name: ${member.getName()}</li>
                    <li>Email: <a href="mailto:${member.getEmail()}"> ${member.getEmail()}</a></li>
                    <li>Office Number: ${member.getOffice()}</li>

                    `
    } else if (member.getRole() === 'Engineer'){
        return `<h1><li>${member.getRole()}</li></h1>
                    <li>ID: ${member.getId()}</li>
                    <li>Name: ${member.getName()}</li>
                    <li>Email: <a href="mailto:${member.getEmail()}"> ${member.getEmail()}</a></li>
                    <li>Github: <a href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></li>
                        
                    `             
    } else if (member.getRole() === 'Intern'){
        return `<h1><li>${member.getRole()}</li></h1>
                    <li>ID: ${member.getId()}</li>
                    <li>Name: ${member.getName()}</li>
                    <li>Email: <a href="mailto:${member.getEmail()}"> ${member.getEmail()}</a></li>
                    <li>School: ${member.getSchool()}</li>

                    `

    };
}


const generate = (team) =>
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Challenge</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
    </head>
    <body>
        <section class = "team">
            <h1>Team</h1>
            <ul>
                
                ${team.map(element => generateCards(element)).join('')}

            </ul>
s
        </section>
        <section class = "button">
            <button id="add" class="btn">Add team member</button>
        </section>
        <script src='index.js'></script>
    </body>
    </html>`;

    module.exports = generate;