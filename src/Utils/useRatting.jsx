export const RatingStar = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
        if (rating > 0.5) {
            star.push(<i key={i} className="bi bi-star-fill"></i>);
            rating--;
        } else if (rating > 0 && rating < 1) {
            star.push(<i key={i} className="bi bi-star-half"></i>);
            rating--;
        } else {
            star.push(<i key={i} className="bi bi-star"></i>);
        }
    }

    return star;
};
