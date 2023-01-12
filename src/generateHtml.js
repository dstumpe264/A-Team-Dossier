

const generate = ({ managerName, managerId, managerEmail, managerOffice}) =>
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Challenge</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
    </head>
    <body>
        <section class = "manager">
            <h1>Team Manager</h1>
            <ul>
                <li>Name: ${managerName}</li>
                <li>Id: ${managerId}</li>
                <li>Email: ${managerEmail}</li>
                <li>Office Number: ${managerOffice}</li>
            </ul>

        </section>
        <section class="employee">
            <h1>Team Members</h1>
            <ul>
                <li></li>
            </ul>
        </section>
        <section class = "button">
            <button id="add" class="btn">Add team member</button>
        </section>
        <script src='index.js'></script>
    </body>
    </html>`;

    module.exports = generate;