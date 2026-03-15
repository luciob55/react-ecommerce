import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

function Checkout() {

 const { cart, totalPrice, clearCart } = useContext(CartContext);

 const [orderId, setOrderId] = useState(null);

 const createOrder = () => {

   const order = {

     buyer: {
       name: "Cliente",
       phone: "123",
       email: "email@test.com"
     },

     items: cart,

     total: totalPrice(),

     date: new Date()

   };

   const ordersRef = collection(db, "orders");

   addDoc(ordersRef, order).then(doc => {

     setOrderId(doc.id);
     clearCart();

   });

 };

 if (orderId) {

   return (
     <h2>
       Compra realizada ✔
       ID: {orderId}
     </h2>
   );

 }

 return (

   <div>

     <h2>Total: ${totalPrice()}</h2>

     <button onClick={createOrder}>
       Confirmar compra
     </button>

   </div>

 );

}

export default Checkout;