import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function NavbarApp() {
  return (
    <>
    <ul className='bg-slate-600'>
      <li >
        <Link to="/" >Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    </>
  );
}

export default NavbarApp;