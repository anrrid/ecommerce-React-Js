import "./NavBar.css";
import { Nav, Container, Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget";
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <LinkContainer to='/'><Navbar.Brand>My Store</Navbar.Brand></LinkContainer>
                <Nav className="Navigation"
                    activeKey="/home"
                >
                    <LinkContainer to='/'><Nav.Link className="linkText">Home</Nav.Link></LinkContainer>
                    <LinkContainer to='/about'><Nav.Link className="linkText">About Us</Nav.Link></LinkContainer>
                    <LinkContainer to='/contact'><Nav.Link className="linkText">Contact</Nav.Link></LinkContainer>
                    <Nav.Link eventKey="Cart" className="linkText"><CartWidget /></Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;