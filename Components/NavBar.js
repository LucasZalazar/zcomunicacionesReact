import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return <nav>
        <a href="#">Productos</a>
        <a href="#">Servicio Tecnico</a>
        <a href="#">Nosotros</a>
        <CartWidget/>
        <ItemListContainer greeting="bienvenidos al sitio"/> 
    </nav>
}

export default NavBar;