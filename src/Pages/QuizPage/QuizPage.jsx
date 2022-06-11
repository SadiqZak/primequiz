import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QuizContext } from "../../Context/quiz-context";
import { QuizCard } from "./components/QuizCard";

export const QuizPage = () => {
  const { state, dispatch } = useContext(QuizContext);
  const navigate = useNavigate()
  let quizAttr = state.quizData.filter((ele) => ele.name === state.currentQuiz);
  let currQuiz = quizAttr[0]

  useEffect(()=>{
    if(quizAttr.length===0){
        navigate('/')
    }
  },[])
 
  return (
    <>
      <nav className="nav-home">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/">
          <h3>Results</h3>
        </Link>
      </nav>
      <div className="container-quiz">
        <div className="quiz-header">
          <h2>Questions</h2>
        </div>
        <div className="container-secondary-quiz">
          <div className="quiz-body-center">
            {
              <div className="card-child-quiz-page ht-200">
                <img
                  className="card-image-quiz"
                  src={currQuiz?.cover}
                  alt={currQuiz?.name}
                />
              </div>
            }

            {
                currQuiz?.questions?.map((ele)=>(
                   <QuizCard ele={ele}/>
                ))
            }
            <div className="quiz-option-child wd-100">Submit</div>
          </div>
        </div>
      </div>
    </>
  );
};
