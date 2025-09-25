const list_skills = [
    "Java",
    "JavaScript",
    "Html",
    "CSS",
    "JavaScript front",
    "JavaScript back",
    "JavaScript Node",
    "JavaScript Express"
]

function obtener_skills(){
    return list_skills;
}

function agregar_skill(skill){
    list_skills.push(skill);
}

function eliminar_skill(skill){
    const index = list_skills.indexOf(skill);
    if(index !== -1){
        list_skills.splice(index, 1);
    }
}

function actualizar_skill(indexSkill, newSkill){
    list_skills[indexSkill] = newSkill;
}

//CRUD
//C - Create
//R - Read
//U - Update
//D - Delete

module.exports = {
    obtener_skills,
    agregar_skill,
    eliminar_skill,
    actualizar_skill
}