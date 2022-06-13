import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { QuizContext } from "../../Context/quiz-context";
import './Card.css'

export const Card = ({quizEle}) => {
  const {dispatch} = useContext(QuizContext)

  return (
    <Link onClick={()=>dispatch({type:`${quizEle.name}`})} to="/quizpage">
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
    </Link>
  );
};
