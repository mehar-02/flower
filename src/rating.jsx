import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

// Function to generate stars based on rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const starsArray = [];
    for (let i = 0; i < fullStars; i++) {
        starsArray.push(<span key={i}><FontAwesomeIcon icon={solidStar} /></span>); // Full star
    }
    if (halfStar) {
        starsArray.push(<span key="halfStar"><FontAwesomeIcon icon={faStarHalfAlt} /></span>); // Half star
    }
    for (let i = 0; i < emptyStars; i++) {
        starsArray.push(<span key={i + fullStars + halfStar}><FontAwesomeIcon icon={regularStar} /></span>); // Empty star
    }
    return starsArray;
}

function StarRating({ rating }) {
    return (
        <div className="stars">{generateStars(rating)}</div>
    );
}

export default StarRating;
