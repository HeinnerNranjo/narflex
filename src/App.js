import './App.css';
import NavBar from './Components/Componentes/NavBar/NavBar'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Nosotros from "./Pages/Nosotros"
import ProductList from './Pages/ProductList';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/Nosotros' element={<Nosotros />}/>  
            <Route path='/Productos' element={<ProductList />}/>  
            <Route path='/' element={<Home />}/>  
        </Routes>
      </BrowserRouter>
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