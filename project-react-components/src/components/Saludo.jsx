import './styles/Saludo.css'

//Props = Propiedad
function Saludo({nombre, edad}){ //Destructuring de props
    return (
        <div className="saludo-container">
            <h2 className = "saludo-header">Hola {nombre}!</h2>
            <p className = "saludo-paragraph">Tienes {edad} años</p>
        </div>
    )
}
export default Saludo
