import React, { useContext } from "react";
import { QuizContext } from "../../../../Context/quiz-context";

export const QuizCardChild = ({ ele, setOptionClicked, optionClicked }) => {
  const {dispatch} = useContext(QuizContext)

  const optionHandler = (e) => {
    // if(!optionClicked){
    //     dispatch({
    //         type: "updateClicked",
    //         payload: { questionAnswer: e.target.value, questionId: ele.questionId },
    //       });
    // }else{
    //     setOptionClicked((prev)=>!prev)
    // }

    dispatch({
                type: "updateClicked",
                payload: { questionAnswer: e.target.value, questionId: ele.questionId },
               });
   
  };
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
