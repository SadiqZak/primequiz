import { createContext, useReducer } from "react";
import { Quiz } from "../backend/db/quiz";
import { reducerFunc } from "./reducer";

const QuizContext = createContext()

const QuizProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducerFunc, {
        currentQuiz:"",
        oriQuiz: [...Quiz],
        quizData: [...Quiz],
    })
    return(
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

export {QuizContext, QuizProvider}