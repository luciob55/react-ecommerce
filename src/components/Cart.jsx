import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {

    return (
      <div className="cart-container">
        <h2>Carrito vacío</h2>
        <Link to="/">Ir a comprar</Link>
      </div>
    );

  }

  return (

    <div className="cart-container">

      <h2>Carrito</h2>

      {cart.map(p => (

        <div key={p.id}>

          <h3>{p.title}</h3>

          <p>Cantidad: {p.quantity}</p>

          <p>Total: ${p.price * p.quantity}</p>

          <button onClick={() => removeItem(p.id)}>
            Eliminar
          </button>

        </div>

      ))}

      <h2>Total: ${totalPrice()}</h2>

      <button onClick={clearCart}>
        Vaciar carrito
      </button>

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>

    </div>

  );

}

export default Cart;