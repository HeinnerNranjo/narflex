import './App.css';
import NavBar from './Components/Componentes/NavBar/NavBar'
import ItemListContainer from './Components/Componentes/Producto/ItemListContainer';

function App() {

  return (
    //JSX
    <div className="App">
      <NavBar/>
      <div className='Producto-Item'>
        <ItemListContainer className='Producto-Cards' title={'Productos'}/>
      </div>
    </div>
  );
}

export default App;