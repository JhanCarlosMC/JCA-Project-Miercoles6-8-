import "./App.css"

function App(){
  const name = 'Jhan Carlos Martinez Ceballos'
  const profession = 'Ingeniero de sistemas'
  const city = 'Armenia'
  const country = 'Colombia'
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
  const disponibility = false;

  return (
    <div>
      <h1>Tarjeta Profesional</h1>
      <h2>{name}</h2>
      <p><strong>Profesión:</strong> {profession}</p>
      <p><strong>Ubicación:</strong> {city}, {country}</p>
      <p><strong>Disponibilidad:</strong> {disponibility ? 'Sí' : 'No'}</p>
    
      <h3>Habilidades:</h3>
      <p> {skills.join(', ')}</p>
    
    </div>
  )
}

export default App