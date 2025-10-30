const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const MONGO_URL = "mongodb+srv://jcmctestpass:jcmctestpass@proexnomo.iexti3r.mongodb.net/?retryWrites=true&w=majority&appName=ProExNoMo";
// const MONGO_URL =  "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/{nombre}"
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Conexion a MongoDB exitosa");
    })
    .catch((error) => {
        console.error("Error al conectar a MongoDB:", error);
    });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Modelo de Skill
const Skill = mongoose.model("Skill",{
    nombre: {type: String, required: true},
    nivel: {type: String, default: "Basico"},
})

app.post("/skills",async (req,res) =>{
    try{
        const newSkill = new Skill(req.body);
        await newSkill.save();
        res.status(201).json({message: "Skill creada", newSkill});
    }catch(error){
        res.status(400).json({error: error.message});
    }
})

app.get("/skills", async (req, res) =>{
    const listSkills = await Skill.find();
    res.status(200).json({listSkills});
})

app.get("/skills/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        const skill = await Skill.findById(id);

        // // Buscar por nombre
        // const skills = await Skill.find({ nombre: "JavaScript" });

        if(!skill){
            return res.status(404).json({message: "Skill no encontrada"});
        }

        res.status(200).json({message: "Skill encontrada", skill: skill});
    }catch(error){
        res.status(400).json({error: error.message});
    }
})

app.delete("/skills/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        const skill = await Skill.findByIdAndDelete(id);

        if(!skill){
            return res.status(404).json({message: "Skill no encontrada"});
        }

        res.status(200).json({message: "Skill eliminada", skill: skill});
    }catch(error){
        res.status(400).json({error: error.message});
    }
})

app.put("/skills/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        const skill = await Skill.findByIdAndUpdate(id, req.body);

        if(!skill){
            return res.status(404).json({message: "Skill no encontrada"});
        }

        res.status(200).json({message: "Skill actualizada", skill: skill});
    }catch(error){
        res.status(400).json({error: error.message});
    }
})