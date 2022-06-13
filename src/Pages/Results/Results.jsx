import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { QuizContext } from "../../Context/quiz-context";

export const Results = () => {
    const {state, dispatch}= useContext(QuizContext)
  return (
    <div>
       <nav className="nav-home">
            <Link onClick={()=>dispatch({ type: "Reset" })} to="/">
              <h3>Home</h3>
            </Link>
          </nav>
      <div className="quiz-header-rules">
        <p className="quiz-header-tag">Final Results</p>
        <div className="card-child-quiz-page ht-200">
          <div className="card-quiz-body">
            <h2>Naruto Quiz</h2>
          </div>
          <div className="quiz-options">
            <p>No. of attempts:{state.finalResults[0]?.value?.attempts}</p>
            <p>Total Score: {state.finalResults[0]?.value?.totalScore}</p>
          </div>
        </div>
        <div className="card-child-quiz-page ht-200">
          <div className="card-quiz-body">
            <h2>Titans Quiz</h2>
          </div>
          <div className="quiz-options">
          <p>No. of attempts:{state.finalResults[1]?.value?.attempts}</p>
            <p>Total Score: {state.finalResults[1]?.value?.totalScore}</p>
          </div>
        </div>
        <div className="card-child-quiz-page ht-200">
          <div className="card-quiz-body">
            <h2>Luffy Quiz</h2>
          </div>
          <div className="quiz-options">
          <p>No. of attempts:{state.finalResults[2]?.value?.attempts}</p>
            <p>Total Score: {state.finalResults[2]?.value?.totalScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
