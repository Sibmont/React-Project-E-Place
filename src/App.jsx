import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar';
import ProductDetail from './components/ProductDetail';

const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<ItemListContainer />} />
      <Route exact path='/items' element={<ItemListContainer/>} /> 
      <Route exact path='/about' element={<About />} />
      <Route exact path='/cart' element={<Cart />} />
      <Route exact path='/product/:id' element={<ItemDetail />} />
      <Route exact path='/category/:category' element={<ItemListContainer />} />
      <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

