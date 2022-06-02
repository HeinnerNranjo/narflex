import './Producto.css'
import { Button } from '@mui/material';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ItemDetail = ({data}) => {
    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    console.log("Data desde ItemDetail: ", data)

    return(
        <div className="ItemDetail">
            <div>
                <strong>{data.title}</strong>
                <br></br>
                <span>$ {data.price}</span> 
            </div>
            <div>
                <img src={`./${data.image}`}/>
            </div>
            <label>Selecciona tu Densidad</label>
                <Select
                    className='select-custom'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    placeholder="Selecciona tu Densidad"
                    onChange={handleChange}
                    >
                    <MenuItem value={'D30'}>D30</MenuItem>
                    <MenuItem value={'D35'}>D35</MenuItem>
                </Select>
        </div>
    )
}

export default ItemDetail