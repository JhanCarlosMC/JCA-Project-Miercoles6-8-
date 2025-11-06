import './TaskCreator.css'
import {useState, useEffect} from 'react'

const URL_API = "http://localhost:3000/tasks"

function TaskCreator(){

    const [task, setTask] = useState({
        id: "",
        nombre: "",
        descripcion: "",
    })
    const [tasks, setTasks] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target

        setTask({...task, [name]: value})
    }

    const crearTask = () => {
       fetch(URL_API,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(task)
       })
       .then((res) => res.json())
       .then((data) => {
            setTasks([...tasks, data]) //Lista Tareas
            setTask({ id: "",nombre: "",descripcion: ""})
       })
    }

    useEffect(() =>{
        fetch(URL_API)
        .then((res) => res.json())
        .then((data) => setTasks(data))
    },[])

    return(
        <div className='body'>
            <div className='container'>
                <div className='card'>
                    <h1 className='h1'>Crear Nueva Tarea</h1>

                    <div className='form-group'>
                        <label htmlFor="id" className='label'>ID (Negocio):</label>
                        <input 
                        type="text" 
                        name="id" 
                        id="id"
                        value={task.id}
                        placeholder='Ejemplo: TASK-001'
                        className='input'
                        onChange={handleChange}
                         />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="nombre" className='label'>Nombre:</label>
                        <input 
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        value={task.nombre}
                        placeholder='Ejemplo: Creacion POST'
                        className='input'
                        onChange={handleChange}
                         />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="descripcion" className='label'>Descripcion:</label>
                        <textarea 
                        type="text" 
                        name="descripcion" 
                        id="descripcion"
                        value={task.descripcion}
                        placeholder='Ejemplo: Crear un endpoint POST para crear tareas'
                        className='textarea'
                        onChange={handleChange}
                         />
                    </div>

                    <button onClick={crearTask} className='button'>Crear Tarea</button>
                </div>

                <div className='tasks-list'>
                    <h2 className='h2'>Lista de Tareas ({tasks.length})</h2>

                    {
                        tasks.map((task) => (
                            <div key={task.id} className='task-item'>
                                <p className='task-id'>{task.id}</p>
                                <p className='task-nombre'>{task.nombre}</p>
                                <p className='task-descripcion'>{task.descripcion}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TaskCreator