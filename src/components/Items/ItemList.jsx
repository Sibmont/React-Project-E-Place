import React from 'react';
import Container from 'react-bootstrap/Container';
import Item from "./Item";

const ItemList = ({products}) => {


  return (

    <>
      <Container>
        <div className='card-container'>
          {products.map((product) => {
            return (
              <Item
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.image}
                category={product.category}
                className="d-flex"
              />
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default React.memo(ItemList)