export const reducerFunc = (state, action)=>{
    switch(action.type){
        case "initialState":{
            return
        }
        case "Naruto":{
            return{
                ...state, currentQuiz: action.type
            }
        }
        case "Titans":{
            return{
                ...state, currentQuiz: action.type
            }
        }
        case "Luffy":{
            return{
                ...state, currentQuiz: action.type
            }
        }
        case "updateClicked":{
            const updateQuizData = ()=>{
                return [...state.quizData].map((ele)=>{
                    return ele.name === state.currentQuiz ? {
                        ...ele, questions: 
                        [...ele.questions].map((ele)=>{
                            return ele.questionId === action.payload.questionId ? {
                                ...ele, options:[...ele.options].map((ele)=>{
                                    return ele.optionAnswer === action.payload.questionAnswer ? {
                                        ...ele, isClicked: !ele.isClicked
                                    }:ele
                                })
                            }:ele
                        })
                        }
                    :ele
                })
            }
            
            return{
                ...state,
                quizData: updateQuizData()
            }
        }
        case "Submit":{
            const updateFinalResults = ()=>{
                return [...state.finalResults].map((ele)=>{
                    return ele.name === state.currentQuiz ? {
                        ...ele, value:{
                           ...ele.value, 
                           totalScore: ele.value.totalScore + action.payload.totalScore,
                           attempts: ele.value.attempts+1
                        }
                    }:ele
                })
            }
            console.log(updateFinalResults())
            return{
                ...state,
                finalResults: updateFinalResults()
            }
        }
        case "Reset":{
            return{
                ...state,
                quizData: state.oriQuiz
            }
        }
        default:{
            return state
        }
    }
}