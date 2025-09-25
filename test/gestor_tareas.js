let listTareas = [];

function agregarTarea(tarea){ //Agregar una nueva tarea
    listTareas.push(tarea);
    return "La tarea: '"+ tarea + "' fue agregada con exito.";
}

function listarTareas(){
}

function eliminarTarea(tarea){
}

module.exports = {
    agregarTarea
}