import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Quiz } from "../../backend/db/quiz";
import { QuizContext } from "../../Context/quiz-context";
import "./Navbar.css";

export const Navbar = () => {
  const {dispatch} = useContext(QuizContext)
  return (
    <nav className="container-nav">
      <div className="logo">
        <Link onClick={()=>dispatch({type:"Reset"})} to="/">AniQuiz</Link>
      </div>
      <div className="nav-right">
        <div>
          <Link to="/" className="action-icons">
            <i className="color-white fa-solid fa-circle-info"></i>
            <p className="color-white">Rules</p>
          </Link>
        </div>
        <div>
          <Link to="/resultspage" className="action-icons">
            <i className="color-white fa-solid fa-file-lines"></i>
            <p className="color-white">Results</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
