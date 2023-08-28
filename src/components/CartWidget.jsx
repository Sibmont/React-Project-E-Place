import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { CartContext } from "../context/ShoppingCartContext"

const CartWidget = () => {

  const { cartLength } = useContext(CartContext)
  

  return (
    <div>
        <span className='fs-4'><FontAwesomeIcon icon={faCartShopping} /> {cartLength}</span>
    </div>
  )
}

export default CartWidget