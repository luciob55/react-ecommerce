import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

 const [cart, setCart] = useState([]);

 const addItem = (product, quantity) => {

   const exist = cart.find(p => p.id === product.id);

   if (exist) {
     const updatedCart = cart.map(p =>
       p.id === product.id
         ? { ...p, quantity: p.quantity + quantity }
         : p
     );

     setCart(updatedCart);
   } else {
     setCart([...cart, { ...product, quantity }]);
   }
 };

 const removeItem = (id) => {
   setCart(cart.filter(p => p.id !== id));
 };

 const clearCart = () => {
   setCart([]);
 };

 const totalPrice = () => {
   return cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
 };

 return (
   <CartContext.Provider value={{
     cart,
     addItem,
     removeItem,
     clearCart,
     totalPrice
   }}>
     {children}
   </CartContext.Provider>
 );
};