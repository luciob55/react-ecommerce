import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {

 const { cart } = useContext(CartContext);

 const quantity = cart.reduce((acc, p) => acc + p.quantity, 0);

 return (
   <Link to="/cart">
     🛒 {quantity}
   </Link>
 );
}

export default CartWidget;