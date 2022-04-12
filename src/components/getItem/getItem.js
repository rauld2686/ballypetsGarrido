import ItemDetail from '../ItemDetail/ItemDetail'

const getItem = ({products}) => {

    return(
        <div>
            {products.map(prod => <ItemDetail key={prod.id} {...prod}/>)}
        </div>
    )
}

export default getItem