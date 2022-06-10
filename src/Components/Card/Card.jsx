import React from "react";
import './Card.css'

export const Card = ({quizEle}) => {
  // console.log(quizEle)
  return (
    <div className="card-child">
        <div className="card-secondary">
          <div className="card-image-cont">
            <img
              className="card-image"
              src={quizEle.cover}
              alt="cover"
            />
          </div>
          <div className="card-quiz-body">
            <h2>{`${quizEle.name} Quiz`}</h2>
            <p>Take this quiz to test yourself</p>
            <p>5 Questions</p>
          </div>
        </div>
    </div>
  );
};
