import { createContext, useReducer } from "react";
import { reducerFunc } from "./reducer";

const QuizContext = createContext()

const QuizProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducerFunc, {
        currentQuiz:""
    })
    return(
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

export {QuizContext, QuizProvider}