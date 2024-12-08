import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ image, title, paragraph, rating, price, RatingStar }) => {
    return (
        <Col sm={6} lg={4} xl={3} className="mb-2">
            <Card className="overflow-hidden">
                <div className="overflow-hidden">
                    <Card.Img variant="top" src={image} />
                </div>
                <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="ratting">{RatingStar(rating)}</div>
                        <div className="wishlist">
                            <i className="bi bi-heart"></i>
                        </div>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{paragraph}</Card.Text>
                    <div className="d-flex align-item-center justify-content-between">
                        <div className="menu-price">
                            <h5 className="mb-0">${price}</h5>
                        </div>
                        <div className="add-cart-btn">
                            <Link to={"/"}>
                                <i className="bi bi-bag me-2"></i>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;
