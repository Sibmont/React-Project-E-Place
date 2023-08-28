import React from 'react';
import { Container, Image } from 'react-bootstrap';
import BreadcrumbDetail from '../BreadcrumbDetail';
import Counter from "../Counter";

const ItemDetail = ({product}) => {
  return (
    <>
        <div className='detail-container'>
          <Container className='d-flex'>
            <div className='detail-row'>
              <div className='p-0'>
                <BreadcrumbDetail />
                <Image src={product.image} fluid className='detail-images'/>
              </div>
              <div className='p-0 detail-info'>
                <div className='mt-2'>
                  <p className='fs-3 fw-bold m-0 mt-3'>{product.name}</p>
                </div>
                <div>
                  <p className='m-0'>{product.description}</p>
                </div>
                <span className='spacer'></span>

                <div className='d-flex justify-content-between'>
                  <p className='fs-3 fw-bold m-0'>${product.price}</p>
                  <p className='m-0 align-self-end fs-4'>Stock: {product.stock}</p>
                </div>

                <div>
                <Counter stock={product.stock} product={product} state={"disabled"}/>
                </div>
              </div>
            </div>
          </Container>
        </div>
    </>
  )
}

export default React.memo(ItemDetail)