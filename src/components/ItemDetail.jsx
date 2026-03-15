import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {

  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(product, quantity);
  };

  return (

    <div className="product-detail">

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <p>${product.price}</p>

      {product.stock > 0
        ? <ItemCount stock={product.stock} onAdd={onAdd}/>
        : <p>Producto sin stock</p>
      }

    </div>

  );

}

export default ItemDetail;