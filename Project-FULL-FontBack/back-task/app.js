const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const URL_DB = "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/JhanCarlosMC";

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

mongoose.connect(URL_DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


const Task = mongoose.model('Task', {
    id: {type: String, unique: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: false},
});
// ----------- /tasks

//Enpoint POST crear una nueva tarea
app.post("/tasks", async (req,res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).send(newTask);
});

//Enpoint GET obtener lista de tareas
app.get("/tasks", async (req,res) => {
    const tasks = await Task.find();
    res.status(200).send(tasks);
});