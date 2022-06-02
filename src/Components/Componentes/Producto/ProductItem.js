//productos
import './Producto.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';

//Functional Component
const ProductItem = ({ image, title, price, stock }) => {
    console.log("producto id:", id)
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent className="lista-producto-Card">
                <div className="lista-producto">
                    <div>
                        <img src={`./${image}`} alt={"producto"} /> 
                        <br></br>
                        <Button variant={'contained'} className="card-btn-details">
                            <Link to={`/product/${id}`}>Ver Detalle</Link>
                        </Button>
                    </div>
                    <br></br>
                    <div>
                        <div>
                            <strong>{title}</strong>
                            <br></br>
                            <span>$ {price}</span>
                        </div>
                        <Button variant={'contained'} color='warning'>Agregar al carrito</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductItem