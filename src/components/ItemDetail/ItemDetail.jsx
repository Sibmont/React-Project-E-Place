import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import AddToCart from '../AddToCart';
import BreadcrumbDetail from '../BreadcrumbDetail';
import Counter from "../Counter";

const ItemDetail = ({products}) => {
  const {id} = useParams()

  const productDetail = products.filter(product => product.id == id)

  const navigate = useNavigate()

  return (
    <>
      {productDetail.map((product) => {
        return(
        <div key={product.id} className='detail-container'>
          <Container className='d-flex'>
            <Row className='detail-row d-flex'>
              <Col xs={7} className='p-0'>
                {/* <button onClick={() => navigate(-1)}>go back</button> */}
                <BreadcrumbDetail />
                <Image src={product.image} fluid style={{ borderRadius: '7px' }}/>
              </Col>
              <Col className='p-0 detail-info'>
                <Row>
                  <p className='fs-3 fw-bold m-0'>{product.name}</p>
                </Row>
                <Row>
                  <p className='m-0'>{product.description}</p>
                </Row>
                <span className='spacer'></span>
                <div className='d-flex justify-content-between'>
                  <p className='fs-3 fw-bold m-0'>${product.price}</p>
                  <p className='m-0 align-self-end fs-4'>Stock: {product.stock}</p>
                </div>
                <Row className=''>
                <Counter stock={product.stock} state={"disabled"}/>
                <AddToCart />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        )
      })}
    </>
  )
}

export default ItemDetail