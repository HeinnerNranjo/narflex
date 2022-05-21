//productos cards
import './Producto.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';

//Functional Component
const Producto = ({ image, title, price, stock }) => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)

    const handleClose = () => {
        setOpen(false)
    }
    const addCount = () => {
        console.log("stock: ", stock)
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    // console.log("Propiedades de Card: ")
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent className="lista-producto-Card">
                <div className="lista-producto">
                    <div>
                        <img src={`./${image}`} /> 
                    </div>
                    <strong>{title}</strong>
                    <br></br>
                    <strong>$ {price}</strong>
                    <br></br>
                </div>
                <div>
                    <Button onClick={removeCount}>-</Button>
                    <p>{count}</p>
                    <Button onClick={addCount}>+</Button>
                    </div>
                    <Button variant={'contained'} color="warning"  >Comprar</Button>
            </CardContent>
        </Card>
    )
}

export default Producto