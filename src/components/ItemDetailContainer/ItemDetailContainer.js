import { useState, useEffect} from 'react'
import { getProducts } from '../asyncMock'
import getItem from '../getItem/getItem'




const ItemDetailContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
    }
    )
    return(
        <div>
            <getItem products={products}/>
        </div>
    )

}

export default ItemDetailContainer