import './App.css';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';
import Review from './components/Review';
import ReviewForm from './components/ReviewForm'
import Stars from './components/Stars';
import moviesData from './moviesData';
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };
  
  const selectedMovie = moviesData[0];

  return (
    <div className='App'>
      <h1>Movies App</h1>
      <ReviewList movie={selectedMovie} reviews={selectedMovie.reviews}/>
      {selectedMovie.reviews.map((review) => (
        <Review key={review.id} review={review} className="Review"/>
      ))}
      <ReviewForm />
      <Stars rating={rating} onStarClick={handleStarClick}/>

      <MovieList movies={moviesData} />

      
    </div>
  )
}

export default App;
