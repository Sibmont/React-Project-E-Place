import { Container } from 'react-bootstrap'
import ControlledCarousel from './ControlledCarousel'
import ItemList from './Items/ItemList'

const Home = ({products}) => {

  const n = 8
  const randomItems = products.sort(() => .5 - Math.random()).slice(0, n);

  

  return (
    <>
      <Container className='mt-5'>
        <ControlledCarousel products={products}/>
      </Container>
      <Container className='mt-5'>
        <div className='home-best-title'>
          <p>Highlights</p>
        </div>
        <ItemList className='home-items' products={randomItems}/>
      </Container>
    </>
  )
}

export default Home