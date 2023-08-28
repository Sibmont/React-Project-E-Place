import { faCircleUser, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../main';
import CartWidget from './CartWidget';

const NavBar = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {               
      signOut(auth).then(() => {
          navigate("/signup");
      }).catch((error) => {
        console.log("Error while signing out: ", error);
      });
  }



  const [displayName, setDisplayName] = useState(null)
  useEffect(() => {
    if (displayName === null) {
      setTimeout(() => {
        setDisplayName(auth.currentUser.displayName)
      },2000)
    } 
  },[displayName])

  return (
    <>
    <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="md" >
        <Container className='navbar-cs'>
          <div className='brand-icon'>
          <Link to={"/"} className='route-link div-size'>
          <Navbar.Brand><FontAwesomeIcon icon={faDiceD20} size='xl'/></Navbar.Brand>
          </Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className='ms-md-4' xs={{ order: 'last' }}>
              <Nav className="me-auto ms-xs-1" variant='underline'>
                <Nav.Link as={Link} to={"/store"} className='mt-xs-4'>Store</Nav.Link>
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
                <NavDropdown.Item as={NavLink} to={`/category/Shooter`}>
                  Shooter
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={`/category/Simulation`}>
                  Simulation
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
          <Link to={"/cart"} className='route-link'>
          <CartWidget/>
          </Link>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className='custom-dropdown-toggle'>
            <FontAwesomeIcon icon={faCircleUser} size='xl' />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <span className='user-name'>Hello, {displayName ? displayName : "User"}</span>
              <button onClick={handleLogout}  className='logout-btn'>Logout</button>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar