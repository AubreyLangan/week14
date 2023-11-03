import React from "react";

const Review = ({ review }) => {
    return (
        <div className="review">
            <p className="rating">Rating: {review.rating ? `${review.rating} stars` : 'No rating'}</p>
            <p className="text">{review.text}</p>
        </div>
    );
};

export default Review;