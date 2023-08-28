import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "../Home";
import Loader from "../Loader";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const  {category}= useParams()
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, 'games')
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}))
        setProducts(docs)
        setLoading(false)
    })

},[])

  const filteredData = products.filter((product) => product.category === category)
    
  return ( 
    <div>
        {loading ? <Loader /> : window.location.pathname != '/' ? <ItemList products = {filteredData.length > 0 ? filteredData : products}/> : null}
        {products.length > 0 && window.location.pathname === '/' ? <Home products={products} /> : null}
    </div>
  )
}

export default ItemListContainer