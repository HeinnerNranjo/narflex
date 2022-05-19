import './App.css';
import NavBar from './Components/Componentes/NavBar/NavBar'
import Producto from './Components/Componentes/Producto/Producto'
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div classname='saludo'>
      <NavBar/>
    <div/>
      <Container className='Producto-Grid' >
        <Grid container >
          <Grid item md={3}>
            <Producto/>
          </Grid>
          <Grid item md={3}>
            <Producto/>
          </Grid>
          <Grid item md={3}>
            <Producto/>
          </Grid>
          <Grid item md={3}>
            <Producto/>
          </Grid>
        </Grid>
      </Container>  
    </div>
  );
}

export default App;
