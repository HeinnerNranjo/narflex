import { useState , useEffect } from 'react';
import ItemDetail from "./ItemDetail"
import productos from "./ProductsMock"

const ItemDetailsContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})

    useEffect(() => {
        console.log("productFilter: ", productFilter)
        if(productFilter === undefined){
            navigate('/notFound')
        }else {
            setProduct(productFilter)
        }
    }, [id])

    const productFilter = productos.find( (product) => {
        return product.id == id
    })

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailsContainer