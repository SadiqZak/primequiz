import React from "react";

export const QuizCardChild = ({ ele, optionHandler }) => {

  return (
    <div>
      <input
        onClick={optionHandler}
        className={`quiz-option-child ${ele.isClicked && `selected`}`}
        type="button"
        value={ele.optionAnswer}
      />
    </div>
  );
};
