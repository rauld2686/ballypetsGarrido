import './Item.css'

const Item = ({tittle, pictureUrl, price}) => {
    return(
        <section>
            <div className="card">
                <picture>
                    <img src={pictureUrl} alt={tittle} />
                </picture>
                <h2>{tittle}</h2>
                <h3>{price}</h3>
                <button>Ver caracteristicas</button>
            </div>
        </section>
    )
}


export default Item