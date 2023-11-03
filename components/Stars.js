import React from "react";

const Stars = ({ rating, onStarClick }) => {
    const maxStars = 5;
    const starIcons = [];

    for (let i = 1; i <= maxStars; i++) {
        starIcons.push(
            <span 
                key={i}
                className={`star ${i <= rating ? 'active' : ''}`}
                onClick={() => onStarClick(i)}
            >
              ⭐  
            </span>
        );
    }

    return <div className="stars">{starIcons}</div>;
};

export default Stars;