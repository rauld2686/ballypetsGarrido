import { useState, useEffect} from 'react'
import { getProducts } from '../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'



const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
    }
    )


    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer