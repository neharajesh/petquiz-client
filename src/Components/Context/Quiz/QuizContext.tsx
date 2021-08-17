import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchAllQuizzes } from "../../../Api/QuizApi";
import { initialQuizState, quizReducerFunction } from "./QuizReducers";
import { QuizActions, QuizState } from "./QuizReducers.types"

type QuizContextType = {
    state: QuizState,
    dispatch: React.Dispatch<QuizActions>
}

const QuizContext = createContext <QuizContextType> ({
    state: initialQuizState,
    dispatch: () => null
});

export const QuizProvider : React.FC = ({children}) => {
    const [state, dispatch] = useReducer(quizReducerFunction, initialQuizState)

    const loadQuizzes = async() => {
        const response = await fetchAllQuizzes();
        console.log({ type: "GET_ALL_QUIZZES", payload: response.quizzes })
        dispatch({ type: "GET_ALL_QUIZZES", payload: response.quizzes })
    }

    useEffect(() => {
        loadQuizzes()
    }, [])

    return (<>
            <QuizContext.Provider value={{state, dispatch}}>
                {children}
            </QuizContext.Provider>
        </>)
}

export const useQuiz = () => {
    return useContext(QuizContext)
}