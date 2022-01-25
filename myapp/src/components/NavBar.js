import "./NavBar.css";
import { Nav, Container, Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget";

const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">My Store</Navbar.Brand>

                <Nav class="Navigation"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Link href="/home" className="linkText">Home</Nav.Link>
                    <Nav.Link eventKey="link-1" className="linkText">About Us</Nav.Link>
                    <Nav.Link eventKey="link-2" className="linkText">Products</Nav.Link>
                    <Nav.Link eventKey="link-2" className="linkText">Contact</Nav.Link>
                    <Nav.Link eventKey="link-2" className="linkText"><CartWidget /></Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;