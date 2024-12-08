import { Carousel, Container, Row } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";
import { RatingStar } from "../../Utils/useRatting";

const BlogSection = () => {
    const BlogContent = [
        {
            id: 1,
            name: "BY AMELIE NEWLOVE",
            img: User1,

            desc: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit mag tempus aliquet porta sodales augue suscipit luctus nequ",
            ratting: 3.5,
        },
        {
            id: 1,
            name: "BY AMELIE NEWLOVE",
            img: User2,

            desc: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit mag tempus aliquet porta sodales augue suscipit luctus nequ",
            ratting: 4.5,
        },
        {
            id: 1,
            name: "BY AMELIE NEWLOVE",
            img: User3,

            desc: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit mag tempus aliquet porta sodales augue suscipit luctus nequ",
            ratting: 5,
        },
        {
            id: 1,
            name: "BY AMELIE NEWLOVE",
            img: User4,

            desc: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit mag tempus aliquet porta sodales augue suscipit luctus nequ",
            ratting: 4,
        },
    ];
    return (
        <section className="blog-section">
            <Container>
                <Row>
                    <Carousel interval={2000} pause="hover">
                        {BlogContent.map((slide, index) => (
                            <Carousel.Item key={index}>
                                <Carousel.Caption>
                                    <div className="user-img" key={index}>
                                        <img
                                            className="img-fluid"
                                            src={slide.img}
                                            alt={`Brand logo ${index + 1}`}
                                        />
                                        <p>{slide.desc}</p>
                                        <div className="item-ratting">
                                            {RatingStar(slide.ratting)}
                                        </div>
                                        <h5>{slide.name}</h5>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
            </Container>
        </section>
    );
};

export default BlogSection;
