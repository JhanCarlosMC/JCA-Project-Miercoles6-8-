import { useState, useEffect } from 'react'

function TestHooks() {
  const [variable, setVariable] = useState(0);
  
  useEffect(() => {
    //Codigo/Efecto que se ejecuta cuando la variable de renderiza
    return () => {
      //Codigo/Efecto que se ejecuta cuando la variable se desmonta(Opcional)
    }
  }, [variableDependiente]); //Dependencia que se va a monitorear
  const changeState = () => {
    setVariable(variable + 1);
  }
  return (
    <>
      <h1>{variable}</h1>
      <button onClick={changeState}>Activar UseState</button>
    </>
  )
}

export default TestHooks
