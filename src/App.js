import './App.css';
import NavBar from './Components/Componentes/NavBar/NavBar'
import ProductList from './Components/Componentes/Producto/ProductList';

function App() {

  return (
    //JSX
    <div className="App">
      <NavBar/>
      <div className='Producto-Item'>
        <ProductList className='Producto-Cards' title={'Productos'}/>
      </div>
    </div>
  );
}

export default App;