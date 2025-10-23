// src/components/ListaUsuarios.jsx
import { useState, useEffect } from 'react'
import './styles/ListaUsuario.css'

function ListaUsuarios() {
const [usuarios, setUsuarios] = useState([])
// Estado para almacenar la lista de usuarios (array vacío inicial)

const [cargando, setCargando] = useState(true)
// Estado para controlar si está cargando (true inicialmente)

const [error, setError] = useState(null)
// Estado para almacenar mensajes de error (null inicialmente)

useEffect(() => {
  // Hook useEffect que se ejecuta una vez al montar el componente
  
  const controller = new AbortController()
  // Crea un AbortController para poder cancelar la petición fetch

  async function cargar() {
    // Función asíncrona para cargar los datos
    try {
      setCargando(true)    // Activa el estado de carga
      setError(null)       // Limpia cualquier error anterior
      
      const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal  // Asigna la señal de aborto a la petición
      })
      
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      // Si la respuesta no es exitosa, lanza error
      
      const data = await resp.json()
      // Convierte la respuesta a JSON
      
      setUsuarios(data)    // Guarda los usuarios en el estado
      
    } catch (e) {
      // Manejo de errores
      if (e.name !== 'AbortError') setError(e.message)
      // Solo actualiza el estado de error si NO es un error de aborto
      // (ignora cancelaciones intencionales)
      
    } finally {
      setCargando(false)   // Siempre desactiva el estado de carga
    }
  }

  cargar()  // Ejecuta la función de carga
  
  // Función de limpieza que se ejecuta al desmontar el componente
  return () => controller.abort()
  
}, []) // 👈 Array de dependencias vacío = se ejecuta solo al montar

// Renderizado condicional
if (cargando) return <div className="lista-usuarios">Cargando...</div>
// Si está cargando, muestra mensaje de carga

if (error) return <div className="lista-usuarios error">Error: {error}</div>
// Si hay error, muestra mensaje de error

  return (
    <div className="lista-usuarios">
      <h2>Usuarios</h2>
      <div className="usuarios-grid">
        {usuarios.map(u => (
          <div key={u.id} className="usuario-card">
            <h3>{u.name}</h3>
            <p>📧 {u.email}</p>
            <p>🏢 {u.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListaUsuarios