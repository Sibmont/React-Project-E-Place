import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import data from "../../assets/products.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const  {category}= useParams()
  
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      // Usando import por el momento con un JSON local. Abajo esta el ejemplo de un fetch a un url
      const response = await fetch("../products.json")
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(`Error found:${error}`)
      return []
    }
  }

  const getData = async () => {
    const products = await fetchData()
    setProducts(products)
  }

  useEffect(() => {
    // fetchData().then((data) => setProducts(data))
    getData()
  },[])

  const filteredData = products.filter((product) => product.category === category)
    
  return (
    <div>
        <ItemList products = {filteredData.length > 0 ? filteredData : products}/>
    </div>
  )
}

export default ItemListContainer