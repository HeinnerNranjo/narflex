import './App.css';
import NavBar from './Components/Navbar/NavBar'



let styleh1 = {
  color : 'red',
  border : '10px',
  marginbottom : '20px'
}

function App() {
  return (
    <div classname="saludo" style={styleh1}>
      <NavBar />
    <h1>Hola Narflex</h1>
    </div>
  );
}

export default App;
