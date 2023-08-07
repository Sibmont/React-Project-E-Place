import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import image from "../../assets/images/breathofthewild.jpg";
import Item from "./Item";

const ItemList = ({products}) => {
  return (
    <>
      <Container>
        <div>
          <Row className="g-5 mt-2">  
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
          </Row>
        </div>
      </Container>
    </>
  )
}

export default ItemList