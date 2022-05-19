//productos cards
import * as React from 'react';
import './Producto.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Producto = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="producto-item">
                    <img src="./Imagenes/ColchonD30.jpeg"/>
                    <p>Colchon D30</p>
                    <span>$ 50.000</span>
                    <CardActions>
                    <Button variant='contained' disableElevation size="medium">leer Mas</Button>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}

export default Producto