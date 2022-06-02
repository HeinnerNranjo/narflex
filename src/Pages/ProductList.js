import { useEffect, useState } from "react"
import productos from "../Components/Componentes/Producto/ProductsMock"
import { useParams } from 'react-router-dom'
import ItemListContainer from "../Components/Componentes/Producto/ItemListContainer"

const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProducts([])
        console.log("category: ", category)
        getProducts()
        .then( (response) => {
            //setProducts(response)
            filterByCategory(response)
        })
    }, [category])
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            // setTimeout(() => {
                resolve(productos)
            // }, 4000)
        })
    }  

    const filterByCategory = (array) => {
        return array.map( (item) => {
            if(item.category == category) {
                return setProducts(products => [...products, item])
            }
        })
    }

    return(
        <div className='general-container'>
            <ItemListContainer title={'LISTADO DE PRODUCTOS'} products={products}/>
        </div>
    )
}

export default ProductList