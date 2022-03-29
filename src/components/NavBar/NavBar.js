import './NavBar.css'
const NavBar = () => {
    return(
        <nav>
            <h1>Bally Pets</h1>
            <ul className="links_navbar">
                <li><a href="#">ALIMENTOS Y SNACKS</a></li>
                <li><a href="#">HIGIENE</a></li>
                <li><a href="#">JUGUETES</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
