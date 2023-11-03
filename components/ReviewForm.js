import React, { useState } from "react";

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    const handleRatingChange = (event) => {
        setRating(event.target.value);
        console.log("Rating changed:", rating);
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
        console.log("Review text changed:", reviewText);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log("Rating:", rating);
        console.log("Review Text:", reviewText);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    className="form-control"
                    id="rating"
                    value={rating}
                    onChange={handleRatingChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="reviewText">Review Text:</label>
                <textarea
                    className="form-control"
                    id="reviewText"
                    rows="3"
                    value={reviewText}
                    onChange={handleReviewTextChange}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;