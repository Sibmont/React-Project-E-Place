import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = () => {
    
  return (
    <div>
      
        <span className='text-white fs-4'><FontAwesomeIcon icon={faCartShopping} /> 0</span>
        
    </div>
  )
}

export default CartWidget