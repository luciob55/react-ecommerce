import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

 const { itemId } = useParams();

 const [product, setProduct] = useState(null);

 useEffect(() => {

   const docRef = doc(db, "products", itemId);

   getDoc(docRef).then(snapshot => {

     setProduct({
       id: snapshot.id,
       ...snapshot.data()
     });

   });

 }, [itemId]);

 if (!product) return <h2>Cargando producto...</h2>;

 return <ItemDetail product={product} />;
}

export default ItemDetailContainer;