import './App.css';
import NavBar from './Components/Componentes/NavBar/NavBar'
import ItemListContainer from './Components/Componentes/Producto/ItemListContainer';
import { useState } from 'react';
import Modal from './Components/Componentes/Modal/Modal';

function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <NavBar/>
      <div className='Producto-Item'>
        <ItemListContainer className='Producto-Cards' title={'Productos D30'}/>
        <ItemListContainer className='Producto-Cards' title={'Productos D35'}/>
      </div>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
      <Modal handleClose={handleClose} open={open} />
    </div>
  );
}

export default App;