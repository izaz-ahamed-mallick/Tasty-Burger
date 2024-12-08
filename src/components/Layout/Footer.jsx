import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/FooterStyle.css";
import { useEffect, useState } from "react";

const Footer = () => {
    const [isTopButton, setTopButton] = useState(false);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handleScroll = () => {
        if (
            document.documentElement.scrollTop > 200 ||
            document.body.scrollTop > 200
        ) {
            setTopButton(true);
        } else {
            setTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <footer>
            <Container>
                <Row>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Location</h5>
                            <p>Burdwan Policeline</p>
                            <p>007 Burdwan</p>
                            <p>Westbengal</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Working Hours</h5>
                            <p>Mon-Fri: 9:00AM - 10:00PM</p>
                            <p>Saturday: 10:00AM - 8:30PM</p>
                            <p>Sunday: 12:00PM - 5:00PM</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Order Now</h5>
                            <p>Quaerat neque purus ipsum</p>
                            <p>
                                <Link to="tel:9998887777" className="calling">
                                    999-888-7777
                                </Link>
                            </p>
                        </div>
                    </Col>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Follow Us</h5>
                            <p>Quaerat neque purus ipsum</p>
                            <ul className=" list-item list-unstyled text-center mt-2">
                                <li>
                                    <Link>
                                        {" "}
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <i className="bi bi-youtube"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <i className="bi bi-twitter"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="copy-right">
                    <Col className="text-center">
                        <div>
                            <ul className="list-unstyled text-center mb-0">
                                <li>
                                    ©{new Date().getFullYear()}{" "}
                                    <span>TASTYBURGER</span> - All Rights
                                    Reserved
                                </li>
                                <li>
                                    <Link to={"/"}>About Us</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Terms Of Use</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

            {isTopButton && (
                <div className="arrow-button" onClick={scrollTop}>
                    <p>
                        {" "}
                        <i className="bi bi-arrow-up"></i>
                    </p>
                </div>
            )}
        </footer>
    );
};

export default Footer;
