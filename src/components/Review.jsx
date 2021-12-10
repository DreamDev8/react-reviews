import React, { useState } from "react";
import reviewsInfo from "../reviews";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Review() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const { name, job, image, text } = reviewsInfo[currentIndex];

    function nextReview() {
        if (currentIndex < reviewsInfo.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }

    function previousReview() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(reviewsInfo.length - 1);
        }
    }

    function surpriseMe() {
        setCurrentIndex(Math.floor(Math.random() * reviewsInfo.length));
    }

    return (
        <article className="article-container">
            <div className="image-container">
                <img className="image" src={image} alt={name} />
                <span className="quote-icon"></span>
            </div>
            <h2 className="name">{name}</h2>
            <h2 className="job">{job}</h2>
            <p className="review">{text}</p>
            <button onClick={previousReview} className="btn-previous">
                <ArrowBackIosNewIcon />
            </button>
            <button onClick={nextReview} className="btn-next">
                <ArrowForwardIosIcon />
            </button>
            <button onClick={surpriseMe} className="cta">Surprise Me</button>
        </article>
    );
}

export default Review;
