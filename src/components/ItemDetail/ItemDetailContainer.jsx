import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const {id} = useParams()

  const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "games", `${id}`)
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = {id: snapshot.id, ...snapshot.data()}
                setProduct(docs)
            }
        })
    })


  return (
    <>
      <ItemDetail product={product}/>
    </>
  )
}

export default ItemDetailContainer