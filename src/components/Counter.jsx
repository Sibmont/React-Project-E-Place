import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { toast } from 'react-toastify';
import { CartContext } from '../context/ShoppingCartContext';

const Counter = ({stock, state, product}) => {

  const [amount, setAmount] = useState(1)
  const { cart, setCart, setCartLength } = useContext(CartContext)
  

  const minus = () => {
    if (amount > 0) {
      setAmount((amount) => amount - 1)
    }
  }
  
  const plus = () => {
    if (amount < stock) {
      setAmount((amount) => amount + 1)
    }
  }
  
  const AddToCart = (p) => {
    const cartItem = cart.find(item => item.id === p.id)
    let totalPrice = p.price * amount;

    if (cartItem) {
      if (cartItem.quantity + amount <= p.stock) {
        cartItem.quantity += amount
        cartItem.totalPrice = totalPrice = p.price * cartItem.quantity;
        setCart(cart)
        toast.success(`${p.name} added to Cart`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      else {
        toast.error('Not enough stock', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    } 
    else {
      cart.push({p, quantity: amount, id: p.id, totalPrice: totalPrice})
      setCart(cart)
      setCartLength(cart.length)
      toast.success(`${p.name} added to Cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }

  return (
    <>
      <ButtonGroup aria-label="Basic example" className='d-flex'>
        <Button
        variant="outline-dark"
        onClick={minus}
        disabled={amount === 1 ? state : ""}
        >-</Button>
        <Button variant="outline-dark" disabled>{amount}</Button>
        <Button variant="outline-dark" onClick={plus} disabled={amount === stock ? state : ""}>+</Button>
      </ButtonGroup>
      <div className="d-grid gap-2 mt-2">
        <Button variant='dark' size='lg' onClick={() => AddToCart(product)}>
            Add to Cart
        </Button>
      </div>
    </>
    
  );
}

export default Counter