import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";

function ItemListContainer() {

 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {

   const productsRef = collection(db, "products");

   getDocs(productsRef).then(snapshot => {

     const data = snapshot.docs.map(doc => ({
       id: doc.id,
       ...doc.data()
     }));

     setProducts(data);
     setLoading(false);

   });

 }, []);

 if (loading) return <h2>Cargando productos...</h2>;

 return (
   <ItemList products={products} />
 );
}

export default ItemListContainer;