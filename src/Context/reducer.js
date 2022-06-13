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
        case "Attack on Titans":{
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
        // case "Submit":{
        //     return{}
        // }
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