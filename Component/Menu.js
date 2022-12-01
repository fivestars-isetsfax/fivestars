import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gestion E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Articles">Articles</Nav.Link>
            <Nav.Link as={Link} to="/Categorie">categorie</Nav.Link>
            <Nav.Link as={Link} to="/Scategorie">Sous categorie</Nav.Link>
            <NavDropdown title="insert" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Insertarticle">insert articles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Insertcategorie">insert categorie</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/InsertScategorie">insert sous categories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
