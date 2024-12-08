import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IOSImage from "../../assets/shop/appstore.png";
import GooglePlay from "../../assets/shop/googleplay.png";
import shopingImg from "../../assets/shop/e-shop.png";
import Caraousal1 from "../../assets/brands/brand-11.png";
import Caraousal2 from "../../assets/brands/brand-12.png";
import Caraousal3 from "../../assets/brands/brand-13.png";
import Caraousal4 from "../../assets/brands/brand-14.png";
import Caraousal5 from "../../assets/brands/brand-15.png";
import Caraousal6 from "../../assets/brands/brand-16.png";
import Caraousal7 from "../../assets/brands/brand-17.png";
import Caraousal8 from "../../assets/brands/brand-18.png";

const ShopSection = () => {
    const carouselSlides = [
        [
            Caraousal1,
            Caraousal2,
            Caraousal3,
            Caraousal4,
            Caraousal5,
            Caraousal6,
        ],
        [
            Caraousal3,
            Caraousal4,
            Caraousal5,
            Caraousal6,
            Caraousal7,
            Caraousal8,
        ],
    ];
    return (
        <>
            <section className="home-shop">
                <Container>
                    <Row className="align-items-center">
                        <Col
                            lg={6}
                            className="text-center text-lg-start mb-5 mb-lg-0"
                        >
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p>
                                {" "}
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum and neque dolor primis libero tempus,
                                blandit varius
                            </p>

                            <Link to={"/"}>
                                <img
                                    src={IOSImage}
                                    alt="apple"
                                    className="img-fluid store me-3"
                                />
                            </Link>
                            <Link to={"/"}>
                                <img
                                    src={GooglePlay}
                                    alt="playstore"
                                    className="img-fluid store me-3"
                                />
                            </Link>
                        </Col>
                        <Col lg={6} className="e-shop">
                            <img
                                src={shopingImg}
                                alt=""
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="brand-section">
                <Container>
                    <Carousel interval={3000} pause="hover">
                        {carouselSlides.map((slide, index) => (
                            <Carousel.Item key={index}>
                                <Carousel.Caption>
                                    <div className="d-flex align-items-center justify-content-between">
                                        {slide.map((imgSrc, imgIndex) => (
                                            <div
                                                className="brand-img"
                                                key={imgIndex}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    src={imgSrc}
                                                    alt={`Brand logo ${
                                                        imgIndex + 1
                                                    }`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </section>
        </>
    );
};

export default ShopSection;
