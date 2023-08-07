
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" >
        <Container>
          <Link to={"/"} className='route-link'>
          <Navbar.Brand>E-Place</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" variant='underline'>
                <Nav.Link>Home</Nav.Link>
                <NavDropdown
                id="nav-dropdown-dark-example"
                title="Categories"
                menuVariant="dark"
                >
                <NavDropdown.Item as={NavLink} to={`/category/Adventure`}>
                  Adventure
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={`/category/RPG`}>
                  RPG
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={`/category/Action`}>
                  Action
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
          <Link to={"/cart"} className='route-link'>
          <CartWidget/>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar