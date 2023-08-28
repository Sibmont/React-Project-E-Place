import { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import { CartContext } from '../context/ShoppingCartContext';
import CartCounter from "./CartCounter";

const CartItem = ({item}) => {

    const [totalPrice, setTotalPrice] = useState(item.totalPrice)
    const { cart, setCartLength } = useContext(CartContext)

    const RemoveItem = () => {
        const dItem = cart.find((i) => i.id === item.id);
        const index = cart.indexOf(dItem);
        cart.splice(index, 1);
        setCartLength(cart.length)
    }

  return (
    <>
        <div className="cart-img-title">
            <div>
                <Image src={item.p.image} className="cart-image"/>
            </div>
            <div className="cart-title">
                {item.p.name}
            </div>
        </div>
        <div className="cart-counter-price">
            <div className="cart-quant-counter">
                <div className="cart-quantity">
                    Quantity
                </div>
                <div className="cart-counter">
                    <CartCounter item={item} priceState={setTotalPrice} state={"disabled"}/>
                </div>
            </div>
            <div className="cart-price-remove">
                <div className="">
                    ${totalPrice.toFixed(2)}
                </div>
                <button className="cart-remove" onClick={() => RemoveItem()}>
                    <span className="remove-span">Remove</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default CartItem