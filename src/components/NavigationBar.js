import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/rosary-logo.png'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="xl" bg="light" variant="light" className='fixed-top'>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="20"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span> Our Lady of the Most Holy Rosary</span>
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#mass-times">Mass Times</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;