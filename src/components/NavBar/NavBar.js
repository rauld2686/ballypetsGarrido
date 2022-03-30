import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <h1>Bally Pets</h1>
            <ul className="links_navbar">
                <li><a href="#">ALIMENTOS</a></li>
                <li><a href="#">HIGIENE</a></li>
                <li><a href="#">JUGUETES</a></li>
            </ul>
        <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar
