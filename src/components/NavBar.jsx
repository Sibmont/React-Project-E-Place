
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
    
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home">E-Place</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" variant='underline'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar