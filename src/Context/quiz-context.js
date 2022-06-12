import { createContext, useReducer } from "react";
import { Quiz } from "../backend/db/quiz";
import { reducerFunc } from "./reducer";

const QuizContext = createContext()

const QuizProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducerFunc, {
        currentQuiz:"",
        oriQuiz: [...Quiz],
        quizData: [...Quiz],
        finalResults:[
            {name: "Naruto",
            value:{
                attempts:0,
                totalScore:0
            }},
            {name:"Titans",
            value:{
                attempts:0,
                totalScore:0
            }},
            {name:"Luffy",
            value:{
                attempts:0,
                totalScore:0
            }}
        ]
        
    })
    return(
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

export {QuizContext, QuizProvider}