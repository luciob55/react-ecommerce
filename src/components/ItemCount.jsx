import { useState } from "react";

function ItemCount({ stock, onAdd }) {

 const [count, setCount] = useState(1);

 return (

   <div>

     <button onClick={() => setCount(count - 1)} disabled={count === 1}>-</button>

     {count}

     <button onClick={() => setCount(count + 1)} disabled={count === stock}>+</button>

     <button onClick={() => onAdd(count)}>
       Agregar al carrito
     </button>

   </div>

 );

}

export default ItemCount;