import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { QuizContext } from '../../Context/quiz-context'


export const Rules = () => {
    const {dispatch}= useContext(QuizContext)
  return (
    <div class="container-quiz">
         <nav className="nav-home">
            <Link onClick={()=>dispatch({ type: "Reset" })} to="/">
              <h3>Home</h3>
            </Link>
          </nav>
        <div class="quiz-header-rules">
            <p class="quiz-header-tag">Rules</p>
            <p>Hey there! <br/> To start playing, navigate to the HOME page on the top left and select from the quiz categories and get started. To keep track of your personal score and attempts navigate to the RESULTS page on the top right corner
               
            </p>
            <div>
                <p class="bd">How to play?</p>
            </div>
            <div>
                <p>Guide 1:</p>
                <p>Each category will have 5 questions, you will have to select one (Be sure to select the right one, because you get only one chance at it)</p>
            </div>
            <div>
                <p>Guide 2:</p>
                <p>Once you hit submit you will be able to see the wrong and right answers depicted in the Red and Green respectively</p>
            </div>
            <div>
                <p>Guide 3:</p>
                <p>Once submitted you can hit Reset and GO AGAIN!</p>
            </div>
        </div>
    </div>
  )
}
