import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mockData from "../../Utils/MockData";

const AboutSection = () => {
    return (
        <>
            <section className="about-section">
                <Container>
                    <Row>
                        <Col
                            lg={{ span: 8, offset: 2 }}
                            className="text-center"
                        >
                            <div>
                                <h2>
                                    The burger tastes better when you eat it
                                    with your family
                                </h2>
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice a ligula risus auctor an tempus
                                    feugiat dolor lacinia cubilia curae integer
                                    orci congue and metus integer primis in
                                    integer metus
                                </p>
                                <Link className="btn order_now red-btn">
                                    Explore Full Menu
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about-wrapper">
                <Container>
                    <Row>
                        {mockData.map((item, i) => (
                            <Col key={i} lg={4} md={6} className="mb-4 mb-md-0">
                                <div className="about-box text-center">
                                    <div className="about-img">
                                        <img
                                            src={item.image}
                                            alt="item-image"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.paragraph}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AboutSection;
