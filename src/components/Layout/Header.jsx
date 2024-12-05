import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link className="logo">
                            <img src={logo} alt="logo-img" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to={"/"}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/menu"}>
                                Our Menu
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/shop"}>
                                Shop
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/blog"}>
                                Blog
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>
                                Contact
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>
                                <i className="bi bi-bag"></i>
                                <em>2</em>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
