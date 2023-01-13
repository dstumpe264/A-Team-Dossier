

function generateCards(member) {
    if (member.getRole() === "Manager") {
       return `<h1><li>${member.getRole()}</li></h1>
                    <li>${member.getId()}</li>
                    <li>${member.getName()}</li>
                    <li>${member.getEmail()}</li>
                    <li>${member.getOffice()}</li>

                    `
    } else if (member.getRole() === 'Engineer'){
        return `<h1><li>${member.getRole()}</li></h1>
                    <li>${member.getId()}</li>
                    <li>${member.getName()}</li>
                    <li>${member.getEmail()}</li>
                    <li>${member.getGithub()}</li>
                        
                    `             
    } else if (member.getRole() === 'Intern'){
        return `<h1><li>${member.getRole()}</li></h1>
                    <li>${member.getId()}</li>
                    <li>${member.getName()}</li>
                    <li>${member.getEmail()}</li>
                    <li>${member.getSchool()}</li>

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
            <h1>Team Manager</h1>
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