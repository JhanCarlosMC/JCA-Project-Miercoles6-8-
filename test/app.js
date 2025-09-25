// console.log("Hola Mundo");
//Secuencia fibonacci
const secuencial = require("./secuencial");
const calculadora = require("./calculadora");
const chalk = require("chalk");
const gestorTareas = require("./gestor_tareas");

// console.log(chalk.blue("Hola a todos desde chalk."));

console.log(chalk.green(gestorTareas.agregarTarea("Tarea 1")));