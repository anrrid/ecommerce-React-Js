import "./NavBar.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">My Store</Navbar.Brand>
        <Nav className="Navigation" activeKey="/home">
          <Nav.Link href="/" className="linkText">
            Home
          </Nav.Link>
          <Nav.Link href="/About" className="linkText">
            About Us
          </Nav.Link>
          <Nav.Link href="/Contact" className="linkText">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;