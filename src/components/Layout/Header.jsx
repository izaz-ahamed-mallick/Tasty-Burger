import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 100) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <Navbar
                collapseOnSelect
                expand="lg"
                className={nav === true ? "sticky" : ""}
            >
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
                                <div className="cart">
                                    <i className="bi bi-bag"></i>
                                    <em className="round">2</em>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
