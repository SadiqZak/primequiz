import React, { useEffect } from "react";
import { Quiz } from "../../backend/db/quiz";
import { Card } from "../../Components/Card/Card";
import "./Home.css";

export const Home = () => {

  return (
    <div>
      <div className="quiz-header">
        <p className="quiz-header-tag">
          Let's find out how well you know your favourite Anime!
        </p>
      </div>
      <div className="container-secondary-quiz">
        <div className="quiz-body">
        {
            Quiz.map((quizEle)=>(
                <Card key={quizEle._id} quizEle={quizEle}/>
            ))
        }
         
        </div>
      </div>
    </div>
  );
};
