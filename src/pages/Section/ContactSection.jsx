import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactSection = () => {
    return (
        <section className="contact-section">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8} className="text-center">
                        <div>
                            <h4>We Guarantee</h4>
                            <h2>30 Minutes Delivery!</h2>
                            <p>
                                {" "}
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque undo dolor primis libero tempus,
                                blandit a cursus varius luctus neque magna
                            </p>
                            <Link className="btn red-btn px-4 py-2 rounded-0">
                                {" "}
                                <i className="bi bi-telephone me-2"></i>
                                999-888-7777
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
