import { useContext, useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/ShoppingCartContext"
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'

const Cart = () => {

  const { cart, cartTotal, setCartTotal } = useContext(CartContext)

  const shippingPrice = 4.99

  let cartPrice = 0

  useEffect(() => {
    setCartTotal(cartPrice)
  })

  return (
    <>
      {cart.length > 0 ? <Container>
        <div className="cart-container">
          <div className='cart-items-col'>
          {cart.map((cartItem) => {
            cartPrice += cartItem.totalPrice
            return (
                <div key={cartItem.id} className="cart-item-container">
                  <div className='cart-item'>
                    <CartItem
                    item={cartItem}/>
                  </div>
                </div>
            )
          })}
          </div>
          <div key={2} className='cart-summary'>
            <Card style={{ width: '18rem' }} bg={'light'}>
              <Card.Body>
                <Card.Title className='border-bottom border-dark pb-2'>Order Summary</Card.Title>
                <div className='cart-summary-block'>
                  <span>
                    Subtotal
                  </span>
                  <span>
                    {cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className='cart-summary-block'>
                  <span>
                    Shipping
                  </span>
                  <span>
                    ${shippingPrice}
                  </span>
                </div>
                <div className='cart-summary-block'>
                  <span>
                    Total
                  </span>
                  <span>
                    ${(cartTotal + shippingPrice).toFixed(2)}
                  </span>
                </div>
                <Link to={"/checkout"} className='route-link'>
                  <div className='d-grid gap-2'>
                      <Button variant='danger'>Proceed to checkout</Button>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container> : <EmptyCart />}
    </>
  )
}

export default Cart