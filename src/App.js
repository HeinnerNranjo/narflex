import './App.css';
import NavBar from './Components/Componentes/NavBar/NavBar'
import ItemListContainer from './Components/Componentes/Producto/ItemListContainer';
import { useState , useEffect } from 'react';
import productos from './Components/Componentes/Producto/Productos';
import ContenedorProductos from './Components/Componentes/Producto/ContenedorProductos';

function App() {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}  

  useEffect( () => {
      getProducts()
      .then( (response) => {
          setProducts(response)
      })
      .catch( (err) => {
      })
      .finally( () => {
      })
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <div className='Producto-Item'>
        <ItemListContainer title={'Productos D30'} products={productos}/>
      </div>
        <button onClick={() => setOpen(true)}>Abrir modal</button>
      <div>
        <ContenedorProductos/>
      </div>
    </div>
  );
}

export default App;





/* llamada APi  */
/* useEffect(() =>{
  fetch()
  .then((response) => {
    response.json()
  })
  .then((data) => {
    response.log("Respuesta : ", data)
  })
}, []) */