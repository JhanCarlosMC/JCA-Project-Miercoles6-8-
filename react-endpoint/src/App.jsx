import { useState, useEffect } from 'react'

import './App.css'

const API_URL = "https://6902a056b208b24affe69fe7.mockapi.io/api/products"

function App() {
  //Lista de productos
  const [products, setProducts] = useState([])
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState('')
  const [idUpdate, setIdUpdate] = useState('')

  // ------------------- GET - Read - Listar Productos -----------------
  useEffect(() => {
    fetch(API_URL) //Por defecto realiza un GET
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
  // ------------------- GET - Read - Listar Productos -----------------

  // ------------------- POST - Create - Crear Producto -----------------
  const crearProducto = () => {
    const newProducto = {
      name: nombre,
      price: precio,
      category: categoria
    }

    fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newProducto)
    }) 
    .then(response => response.json())
    .then(data => {
      setProducts([...products, data])
      setNombre('')
      setPrecio('')
      setCategoria('')
    })
  }
  // ------------------- POST - Create - Crear Producto -----------------

  // ------------------- DELETE - Delete - Eliminar Producto -----------------

  const eliminarProducto = (id) => {
    fetch(`${API_URL}/${id}`,{
      method: "DELETE"
    })
    .then(() => {
      setProducts(products.filter(product => product.id !== id))
    })
  }

  // ------------------- DELETE - Delete - Eliminar Producto -----------------

  // ------------------- PUT - Update - Actualizar Producto -----------------
  const capturarProducto = (product) =>{
    setIdUpdate(product.id)

    setNombre(product.name)
    setPrecio(product.price)
    setCategoria(product.category)
  }

  const actualizarProducto  = () =>{
    const updateProducto = {
      name: nombre,
      price: precio,
      category: categoria
    }

    fetch(`${API_URL}/${idUpdate}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateProducto)
    })
    .then(response => response.json())
    .then(data => {
      setProducts(
        products.map(product => 
          product.id === idUpdate ? data : product)
      )
    })


    setIdUpdate(null)

    setNombre("")
    setPrecio("")
    setCategoria("")
  }

  // ------------------- PUT - Update - Actualizar Producto -----------------

  return (
    <div className='app'>
      <h1>CRUD Productos</h1>

      <div className='formulario'>
        <h2>Agregar Producto</h2>
        <input 
          type="text" 
          placeholder='Nombre...' 
          value={nombre} 
          onChange={e => setNombre(e.target.value)}
        />

        <input 
          type="number" 
          placeholder='Precio...' 
          value={precio} 
          onChange={e => setPrecio(e.target.value)}
        />

        <input 
          type="text" 
          placeholder='Categoria...' 
          value={categoria} 
          onChange={e => setCategoria(e.target.value)}
        />

        <button onClick={crearProducto}>Crear</button>
        <button onClick={actualizarProducto}>Actualizar</button>

      </div>

      <div className='lista'>
        <h2>Lista de Productos</h2>

          {products.map(product => (
            <div key={product.id} className='producto'>
              <h3>{product.name}</h3>
              <p>{`Precio: ${product.price}`}</p>
              <p>{`Categoria: ${product.category}`}</p>

              <button onClick={() => capturarProducto(product)}>Actualizar</button>
              <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
          </div>
          ))}
      </div>
    </div>
  )
}

export default App
