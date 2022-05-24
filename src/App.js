import './App.css';
import NavBar from './Components/Componentes/NavBar/NavBar'
import ItemListContainer from './Components/Componentes/Producto/ItemListContainer';
import { useState , useEffect } from 'react';
import Modal from './Components/Componentes/Modal/Modal';
import Producto from './Components/Componentes/Producto/Producto';

function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const [products, setProducts] = useState([])
  const productos = [
    {
        title : 'Colchon D30 200*190',
        price : 50000,
        image : './imagenes/ColchonD30-200.jpeg',
        description : '',
        stock : 2,
        id : 1
    },
    {
        title : 'Colchon D30 140*190',
        price : 45000,
        image : './imagenes/ColchonD30-140.jpeg',
        description : '',
        stock : 3,
        id : 2
    },
    {
        title : 'Colchon D30 120*190',
        price : 40000,
        image : './imagenes/ColchonD30-120.jpeg',
        description : '',
        stock : 5,
        id : 3
    },
    {
        title : 'Colchon D30 100*190',
        price : 30000,
        image : './imagenes/ColchonD30-100.jpeg',
        description : '',
        stock : 10,
        id : 4
    },
  ]

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
    </div>
  );
}

export default App;