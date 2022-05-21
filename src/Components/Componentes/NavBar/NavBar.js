//UpperCamelCase 
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="menuinicial">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <div>
                            <img className='logo' src="./Imagenes/logo.jpeg"/>
                        </div>
                        <ul>
                            <li>
                                <button style={{ backgroundColor: 'chocolate' }} >Inicio</button>
                            </li>
                            <li>
                                <button style={{ backgroundColor: 'chocolate' }} >Productos</button>
                            </li>
                            <li>
                                <button style={{ backgroundColor: 'chocolate' }} >Nosotros</button>
                            </li>
                        </ul>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fabrica de Colchones Narflex
                    </Typography>
                    <CartWidget/>
                    </Toolbar>
                </AppBar>
                
            </Box>
        </div> 
    )
}

export default NavBar