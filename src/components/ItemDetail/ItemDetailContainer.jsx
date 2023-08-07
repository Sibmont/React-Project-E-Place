import { useEffect, useState } from "react";
// import data from "../../assets/products.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      // Usando import por el momento con un JSON local. Abajo esta el ejemplo de un fetch a un url
      const response = await fetch("../products.json")
      const data = await response.json()
      return data
    }
    catch (err) {
      console.error(`Error found: ${err}`)
    }
  }

  const getData = async () => {
    const products = await fetchData()
    setProducts(products)
  }

  useEffect(() => {
    getData()
  },[])


  return (
    <>
      <ItemDetail products={products}/>
    </>
  )
}

export default ItemDetailContainer