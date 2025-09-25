const chalk = require("chalk");
const express = require("express"); //Import express
const app = express(); //Create express app
const port = 3000; //El puerto del servidor

//Endpoint Root
app.get("/", //Direccion en la URL
    (req, res) => { //req: request, res: response
    res.send(`<h1>Hola estudiantes de JC</h1>`);
});

//Endpoint test
app.get("/test", //Direccion en la URL
    (req, res) => { //req: request, res: response
    res.send(`<h1>Endpoint Test</h1>`);
})

//Endpoint test
app.get("/yo", //Direccion en la URL
    (req, res) => { //req: request, res: response
    res.send(`<h1>Informacion Personal</h1>
            <p>Nombre: Jhan Carlos</p>
            <p>Edad: 24</p>
            <p>Email: jc@jc.com</p>
        `);
})

app.listen(port, () => { //Run del server
        console.log(chalk.green(`Server is running on port ${port}`));
    }
);