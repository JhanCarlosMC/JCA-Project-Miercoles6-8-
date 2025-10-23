import { useState } from 'react';
import './styles/FormularioNombre.css';

function FormularioNombre() {
  const [nombre, setNombre] = useState('');

  const manejadorCambioInput = (event) => {
    setNombre(event.target.value);
  }

  return (
    <div>
        <h2>Hola, {nombre || "Usuario Anonimo"}!</h2>
        <input 
            type="text" 
            id="nombre" 
            placeholder="Ingresa tu nombre..."
            onChange={manejadorCambioInput}
        />
    </div>
  )
}

export default FormularioNombre;