import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = () => {
    
  return (
    <div>
        
        <a className='text-white fs-4' href='#cart'><FontAwesomeIcon icon={faCartShopping} /> 0</a>
        
    </div>
  )
}

export default CartWidget