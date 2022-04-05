import { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial)

    const minus = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const plus = () => {
        if(count < props.stock){
            setCount(count + 1)
        }
    }
    
    return(
        <div>
            <p>Bolsas de desechos</p>
            <button onClick={minus}>-</button>
            <p>{count}</p>
            <button onClick={plus}>+</button>
            <button onClick={ () => props.onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount