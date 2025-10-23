import "./styles/Contador.css";
import { useState, useEffect } from 'react';

function Contador(){
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Contador - ${contador}`
    }, [contador]); //Dependencia que se va a monitorear

    const aumentar = () => {
        setContador( contador + 1)
    }

    const reiniciar = () => {
        setContador(0)
    }

    const decrementar = () => {
        setContador( contador - 1)
    }

    return (
        <div className="contador">
            <h2>Contador: {contador}</h2>
            <div className="botones">
                <button onClick={decrementar}>Decrementar</button>
                <button onClick={reiniciar}>Reiniciar</button>
                <button onClick={aumentar}>Aumentar</button>
            </div>
        </div>
    )
}

export default Contador;