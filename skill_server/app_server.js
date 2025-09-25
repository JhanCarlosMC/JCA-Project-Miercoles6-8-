const skm = require('./skills_module');
const exp = require('express');
const app = exp(); // Crando aplicacion de express
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Endpoint Raiz
app.get("/", (req, res) => {
    res.json({message: "Bienvenido a la API sobre mis habilidades."});
});

//Endpoint Obtener todas las habilidades
app.get("/listskills",(req,res) =>{
    const list_skills = skm.obtener_skills();
    res.json({skills: list_skills});
});

//Endpoint Obtener habilidad especifica
//Con parametros por url -> Solicitud de informacion especifica
app.get("/skills/:id",(req,res) =>{
    const id = parseInt(req.params.id);

    const list_skills = skm.obtener_skills();
    const skillFind = list_skills[id];

    if(skillFind){
        res.status(200).json({skill: skillFind});
    }else{
        res.status(404).json({message: "Skill no encontrado"});
    }
});

//Endpoint Obtener habilidades especificas o multiples
//Con query parameters -> Filtrar, buscar, limitar resultado.
app.get("/skills",(req,res) =>{
    const list_skills = skm.obtener_skills();
    let skillsResponse = list_skills;

    const limite = parseInt(req.query.limite);
    const buscar = req.query.buscar;

    if(buscar){
        skillsResponse = skillsResponse.filter(skill => skill.includes(buscar));
    }

    if(limite){
        skillsResponse = skillsResponse.slice(0,limite);
    }

    res.json({list_skills: skillsResponse});
});

//Endpoint Agregar habilidad
//Body -> JSON
app.use(exp.json());
app.post("/skills",(req,res) =>{
    // const skill = req.body.skill;
    const {skill} = req.body;

    if(!skill){
        return res.status(404).json({message: "Skill no suministrada"});
    }

    skm.agregar_skill(skill);
    res.status(201).json({message: "Skill agregada", list_skills: skm.obtener_skills()});
});

//Endpoint Eliminar habilidad
app.delete("/skills/:skillDelete",(req,res) =>{
    const skillDelete = req.params.skillDelete;
    
    skm.eliminar_skill(skillDelete);
    res.json({message: "Skill eliminada", list_skills: skm.obtener_skills()});
})