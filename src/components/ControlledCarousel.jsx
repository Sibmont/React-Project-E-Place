import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function ControlledCarousel({products}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="dark" className='carousel-container' activeIndex={index} onSelect={handleSelect}>
      {products.map(product => {
        return (
            <Carousel.Item key={product.id}>
              <Link to={`/item/${product.id}`} state={{ prevPath: location.pathname, name: product.name }} className='route-link'>
              <Image text="First slide" src={product.image} className="d-block carousel-img" />
              </Link>
            </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default ControlledCarousel;