import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { CartContext } from '../context/ShoppingCartContext';

const CartCounter = ({state, priceState, item}) => {

  const { setCartTotal } = useContext(CartContext)
  const [cartQuantity, setQuantity] = useState(item.quantity)
    
  const minus = () => {
    if (cartQuantity > 1) {
        setQuantity((cartQuantity) => cartQuantity - 1)
        item.quantity --
        item.totalPrice -= item.p.price
        priceState(item.totalPrice)
        setCartTotal((cartTotal) => cartTotal -= item.p.price)
    }
  }

  const plus = () => {
    if (item.quantity < item.p.stock) {
        setQuantity((cartQuantity) => cartQuantity + 1)
        item.quantity ++
        item.totalPrice += item.p.price
        priceState(item.totalPrice)
        setCartTotal((cartTotal) => cartTotal += item.p.price)
    }
  }

  return (
    <>
      <ButtonGroup aria-label="Basic example" className='d-flex h-100 w-100'>
        <Button
        variant="light"
        onClick={minus}
        disabled={item.quantity === 1 ? state : ""}
        >-</Button>
        <Button variant="outline-light" disabled>{cartQuantity}</Button>
        <Button variant="light" onClick={plus} disabled={item.quantity === item.p.stock ? state : ""}>+</Button>
      </ButtonGroup>
    </>
    
  );
}

export default CartCounter