import React, { useState } from "react";
import { QuizCardChild } from "./child/QuizCardChild";

export const QuizCard = ({ele}) => {
  const [optionClicked, setOptionClicked] = useState(false);

  return (
    <div key={ele._id} className="card-child-quiz-page">
      <div className="card-quiz-body">
        <h2>{ele.question}</h2>
      </div>
      <div className="quiz-options">
        {ele.options.map((ele) => (
          <QuizCardChild ele={ele} optionClicked={optionClicked} setOptionClicked={setOptionClicked}/>
        ))}
      </div>
    </div>
  );
};
