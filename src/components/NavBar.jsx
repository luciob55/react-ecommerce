import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {

 return (

   <nav>

     <Link to="/">
       <h2>LBShop</h2>
     </Link>

     <Link to="/category/ropa">Ropa</Link>
     <Link to="/category/zapatillas">Zapatillas</Link>
     <Link to="/category/accesorios">Accesorios</Link>

     <CartWidget />

   </nav>

 );
}

export default NavBar;