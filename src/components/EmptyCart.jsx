import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
        <div className='empty-cart-container'>
            <div className='text-white fs-2 empty-cart-icon'>
                <FontAwesomeIcon icon={faCartShopping} size='2xl' />
            </div>
            <div className='empty-cart-text'>
                <div>
                    Your cart is empty. Looking for <Link to={"/store"} className='empty-cart-link'>something</Link> to add?
                </div>
            </div>
        </div>
    </>
  )
}

export default EmptyCart