import { useState, useEffect} from 'react'
import { getProducts } from '../asyncMock'
import { getProductsById } from '../asyncMock2'
import getItem from '../getItem/getItem'
import './ItemDetailContainer.css'



const ItemDetailContainer = (props) => {
    const [products, setProducts] = useState([])


    const useEffect = () => {
        getProductsById().then(prods => {
            setProducts(prods)
        }
        )
    }


    return(
        <div>
            <getItem products={products}/>
        </div>
    )
}

export default ItemDetailContainer