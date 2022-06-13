import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QuizContext } from "../../Context/quiz-context";
import { QuizCard } from "./components/QuizCard";
import './QuizPage.css'

export const QuizPage = () => {
  const { state, dispatch } = useContext(QuizContext);
  const [score, setScore]= useState(0)
  const navigate = useNavigate();
  let quizAttr = state.quizData.filter((ele) => ele.name === state.currentQuiz);
  let currQuiz = quizAttr[0];

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (quizAttr.length === 0) {
      navigate("/");
    }

    if(submit){
      dispatch({ type: "Submit", payload:{totalScore: score, currentQuiz: state.currentQuiz }});
    }
  }, [submit]);

 

  const submitClickHandler = () => {
    setSubmit((prev) => !prev);
    currQuiz.questions.map((question)=>{
      question.options.map((optionAnswer)=>{
        return optionAnswer.isCorrect && optionAnswer.isClicked === true ? setScore((prev)=>prev+1): false
      })
    })
    }


  const ResetClickHandler = () => {
    setSubmit((prev) => !prev);
    dispatch({ type: "Reset" });
    setScore(0)
  };

  return (
    <>
      {!submit && (
        <>
          <nav className="nav-home">
            <Link onClick={()=>dispatch({ type: "Reset" })} to="/">
              <h3>Home</h3>
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

                {currQuiz?.questions?.map((ele) => (
                  <QuizCard key={ele._id} ele={ele} />
                ))}
                <button
                  onClick={submitClickHandler}
                  className="quiz-option-child wd-100"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {submit &&
          <>
          <nav className="nav-home">
            <Link to="/" onClick={()=>dispatch({ type: "Reset" })}>
              <h3>Home</h3>
            </Link>
          </nav>
          <div className="container-quiz">
            <div className="quiz-header">
              <h3>Answers</h3>
              <h2>Scored {score}/5</h2>
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

                {currQuiz?.questions?.map((ele) => (
                   <div key={ele._id} className="card-child-quiz-page">
                   <div className="card-quiz-body">
                     <h2>{ele.question}</h2>
                   </div>
                   <div className="quiz-options">
                     {ele.options.map((ele) => (
                       <div>
                       <div
                         className={`quiz-answer-child ${ele.isClicked & ele.isCorrect === true && `correct`} ${ele.isClicked === true & ele.isCorrect===false && `wrong`} ${ele.isCorrect===true && `correct`}`}
                       >{ele.optionAnswer}</div>
                     </div>
                     ))}
                   </div>
                 </div>
                ))}
                  <button
                  onClick={ResetClickHandler}
                  className="quiz-option-child wd-100"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          </>
          }
    </>
  );
};
