import { Outlet } from 'react-router';
import NavBar from './NavBar';

const WithNav = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default WithNav