import { Link } from "react-router-dom";

function Item({ product }) {

  return (

    <div className="product-card">

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>
        <button>Ver detalle</button>
      </Link>

    </div>

  );

}

export default Item;