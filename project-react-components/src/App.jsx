import './App.css'
import './components/styles/App.module.css'

import Header from './components/Header.jsx'
import Saludo from './components/Saludo.jsx'


function App() {

  {/* Componente principal, renderizado en el div con id "root" */}
  return (
    <div>
      <Header />

      <h2>Seccion de Saludos</h2>
      <main>
        <Saludo nombre="Jhan" edad={24} />
        <Saludo nombre="Luis" edad={22} />
        <Saludo nombre="Juan" edad={25} />
        <Saludo nombre="Ana" edad={23} />
      </main>
    </div>
  )
}

export default App
