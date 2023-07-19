import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {

  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="Welcome to E-Place"/>
    </>
  )
}

export default App

