import { createContext, useState } from "react"

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {
const [cart, setCart] = useState([])
const [cartTotal, setCartTotal] = useState(0)
const [cartLength, setCartLength] = useState(0)

  return (
    <>
      <CartContext.Provider value={{cart, setCart, cartLength, setCartLength, cartTotal, setCartTotal}}>
        {children}
      </CartContext.Provider>
    </>
  )

}

export default ShoppingCartProvider