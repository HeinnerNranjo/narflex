import ProductList from "../Components/Componentes/Producto/ItemListContainer"
import { useEffect, useState } from "react"
import productos from "../Components/Componentes/Producto/ProductsMock"

const Home = () => {
    const [products, setProducts] = useState([])
        
    useEffect( () => {
        console.log("asdas")
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
    }, [])
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
                resolve(productos)
        })
    }  

    return(
        <div className='general-container'>
            <ProductList title={'Productos Recomendados'} products={products}/>
        </div>
    )
}

export default Home