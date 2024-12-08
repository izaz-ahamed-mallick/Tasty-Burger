import { Col, Container, Row } from "react-bootstrap";
import mockCardData from "../../Utils/MockCardData";

import Cards from "../../components/Layout/Card";
import { Link } from "react-router-dom";
import { RatingStar } from "../../Utils/useRatting";

const FoodCard = () => {
    return (
        <section className="menu-section">
            <Container>
                <Row>
                    <Col
                        lg={{ span: 8, offset: 2 }}
                        className="text-center mb-5"
                    >
                        <h1>OUR CRAZY BURGERS</h1>
                        <p id="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum quo veniam pariatur ratione nesciunt
                            modi.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {mockCardData.map((data) => (
                        <Cards
                            key={data.id}
                            {...data}
                            RatingStar={RatingStar}
                        />
                    ))}
                </Row>

                <Row className="">
                    <Col sm={6} lg={5}>
                        <div className="ads_box ads-img1 mb-5 mb-md-0">
                            <h4>GET YOUR FREE</h4>
                            <h5>CHEESE FRIES</h5>
                            <Link to={"/"} className="btn red-btn">
                                Learn More
                            </Link>
                        </div>
                    </Col>
                    <Col sm={6} lg={7}>
                        <div className="ads_box ads-img2">
                            <h4>GET YOUR FREE</h4>
                            <h5>CHEESE FRIES</h5>
                            <Link to={"/"} className="btn red-btn">
                                Learn More
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FoodCard;
