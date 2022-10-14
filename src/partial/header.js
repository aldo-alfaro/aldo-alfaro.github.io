import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="fixed-top">
        <Container>
            <Navbar.Brand as={Link} to="/">
              <strong>ALDO ALFARO C</strong>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/about">Sobre mi</Nav.Link>
                <Nav.Link as={Link} to="/portfolio">Portafolio</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;
