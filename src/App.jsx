import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import Loader from './components/Loader';
import Login from './components/Login';
import NavBar from './components/NavBar';
import WithNav from './components/WithNav';
import WithoutNav from './components/WithoutNav';
import ShoppingCartContext from './context/ShoppingCartContext';
import { auth } from './main';

const App = () => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  },[]);

  return (
    <BrowserRouter>
      <ShoppingCartContext>
      {loading ? <Loader/> : 
        <Routes>
          <Route element={<WithoutNav />}>
            <Route exact path='/signup' element={<Login />} />
          </Route>
            <Route element={<WithNav />}>
            <Route exact path='/' element={user != null ? <ItemListContainer /> : <Navigate to='/signup'/>} />
            <Route exact path='/store' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/product/:id' element={<ItemDetail />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Route>
        </Routes>}
      </ShoppingCartContext>
    </BrowserRouter>
  )
}

export default App

