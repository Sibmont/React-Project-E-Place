import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Counter = ({stock, state}) => {

  const [amount, setAmount] = useState(0)

  const minus = () => {
    if (amount > 0) {
      setAmount((prevAmount) => prevAmount - 1)
    }
  }

  const plus = () => {
    if (amount < stock) {
      setAmount((prevAmount) => prevAmount + 1)
    }
  }

  return (

    <ButtonGroup aria-label="Basic example" className='d-flex'>
      <Button
      variant="outline-dark"
      onClick={minus}
      disabled={amount === 0 ? state : ""}
      >-</Button>
      <Button variant="outline-dark" disabled>{amount}</Button>
      <Button variant="outline-dark" onClick={plus} disabled={amount === stock ? state : ""}>+</Button>
    </ButtonGroup>
  );
}

export default Counter