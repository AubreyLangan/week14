import React from "react";
import Review from "./Review";
import moviesData from "../moviesData";

const ReviewList = ({ movieId }) => {
    const movie = moviesData.find((movie) => movie.id === movieId);
    const reviews = movie ? movie.reviews : [];    
    return (
        <div>
            <div className="review-list">
                {reviews.map((review, index) => (
                  <Review key={index} review={review} />  
                ))}
            </div>
        </div>
    );
};

export default ReviewList;