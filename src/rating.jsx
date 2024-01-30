import React from 'react';

// Function to generate stars based on rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const starsArray = [];
    for (let i = 0; i < fullStars; i++) {
        starsArray.push(<span key={i}>&#9733;</span>); // Full star
    }
    if (halfStar) {
        starsArray.push(<span key="halfStar">&#9734;</span>); // Half star
    }
    for (let i = 0; i < emptyStars; i++) {
        starsArray.push(<span key={i + fullStars + halfStar}>&#9734;</span>); // Empty star
    }
    return starsArray;
}

function StarRating({ rating }) {
    return (
        <div className="stars">{generateStars(rating)}</div>
    );
}

export default StarRating;
