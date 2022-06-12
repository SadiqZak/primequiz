import React, { useState, useContext } from "react";
import { QuizContext } from "../../../Context/quiz-context";
import { QuizCardChild } from "./child/QuizCardChild";

export const QuizCard = ({ele}) => {
  const [optionClicked, setOptionClicked] = useState(false);
    const {dispatch} = useContext(QuizContext)

  const optionHandler = (e) => {
    setOptionClicked(true)
    if(!optionClicked){
        dispatch({
            type: "updateClicked",
            payload: { questionAnswer: e.target.value, questionId: ele.questionId },
          });
    }
  };

  return (
    <div key={ele._id} className="card-child-quiz-page">
      <div className="card-quiz-body">
        <h2>{ele.question}</h2>
      </div>
      <div className="quiz-options">
        {ele.options.map((ele) => (
          <QuizCardChild key={ele.questionId} ele={ele} optionHandler={optionHandler}/>
        ))}
      </div>
    </div>
  );
};
