import './ItemDetail.css'

const ItemDetail = ({tittle, pictureUrl, price}) => {
    return(
        <section>
            <div className="card">
                <picture>
                    <img src={pictureUrl} alt={tittle} />
                </picture>
                <h2>{tittle}</h2>
                <h3>{price}</h3>
                <p></p>
            </div>
        </section>
    )
}


export default ItemDetail