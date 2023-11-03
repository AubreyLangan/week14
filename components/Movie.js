import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
    const [userRating, setUserRating] = useState(0);
    const [userReview, setUserReview] = useState('');

    const initialReviews = movie?.reviews || [];
    
    const [reviews, setReviews] = useState(initialReviews);

    const handleRatingChange = (rating) => {
        setUserRating(rating);
    };

    const handleReviewChange = (event) => {
        setUserReview(event.target.value);
    };

    const handleSubmitReview = () => {
        if (userReview.trim() !== '') {
            const newReview = {
                text: userReview,
                rating: userRating,
            };

            setReviews([...reviews, newReview]);
            setUserReview('');
            setUserRating(0);
        }
    };

    return (
        <div className='movie'>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.synopsis}</p>
            <Stars rating={userRating} onStarClick={handleRatingChange} />
            <ReviewForm
                userRating={userRating}
                userReview={userReview}
                onReviewChange={handleReviewChange}
                onSubmit={handleSubmitReview}
            />
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default Movie;