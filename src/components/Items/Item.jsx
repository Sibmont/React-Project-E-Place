
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, category}) => {

  return (

        <Col xs="auto">
          <Card style={{ width: '17.5rem' }} className='p-card'>
          <Link to={`/item/${id}`} state={{ prevPath: location.pathname, name: {name} }} className='route-link'>
            <Card.Img variant="top" src={img} className='p-images'/>
            <Card.Body className='d-flex flex-column justify-content-between'>
              <Card.Title className='m-0 c-title'>{name}</Card.Title>
              <Card.Text className='fs-6 mb-1 fw-bold'>
                ${price}
              </Card.Text>
              <Card.Text className='fs-6'>
                {category}
              </Card.Text>
            </Card.Body>
          </Link>
          </Card>
        </Col>

  )
}

export default Item