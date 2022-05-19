import Producto from '../Producto/Producto'
import { Grid } from '@mui/material';

const ProductList = ({title}) => {
    return(
        <>
        <h2>{title}</h2>
        <Grid container>
            <Grid item md={3}>
                <Producto title={"Colchon D30 200*190"} price={50000} image={"./Imagenes/ColchonD30-200.jpeg"}/>
            </Grid>
            <Grid item md={3}>
                <Producto title={"Colchon D30 140*190"} price={45000} image={"./Imagenes/ColchonD30-140.jpeg"}/>
            </Grid>
            <Grid item md={3}>
                <Producto title={"Colchon D30 120*190"} price={40000} image={"./Imagenes/ColchonD30-120.jpeg"}/>
            </Grid>
            <Grid item md={3}>
                <Producto title={"Colchon D30 100*190"} price={35000} image={"./Imagenes/ColchonD30-100.jpeg"}/>
            </Grid>
        </Grid>
        </>
    )
}

export default ProductList