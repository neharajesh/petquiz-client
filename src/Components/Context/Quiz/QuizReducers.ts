import { initialUserData } from "../User/UserReducers"
import { QuizActions, QuizState, SelectedAnswersType } from "./QuizReducers.types"

export const initialQuizData = {
    _id: "",
    quizName: "",
    image: "",
    totalPoints: 0,
    categories: [""],
    description: "",
    questionsList: [{
        _id: "",
        questionText: "",
        string: "",
        points: 0,
        image: "",
        explanation: "",
        options: [{
            _id: "",
            optionText: "",
            isRight: false
        }]
    }]
}

const initialQuestionData = {
    _id: "",
    questionText: "",
    string: "",
    points: 0,
    image: "",
    explanation: "",
    options: [{
        _id: "",
        optionText: "",
        isRight: false
    }]
}

const initialSelectedAnswersData:SelectedAnswersType = {
    currentQuestion: initialQuestionData,
    selectedAnswerId: ""
}

export const initialQuizState:QuizState = {
    currentUser: initialUserData,
    allQuizzes: [initialQuizData],
    currentQuiz: initialQuizData,
    currentScore: 0,
    currentQuestion: initialQuestionData,
    currentQuizAnswers: [initialSelectedAnswersData],
    error: ""
}

export const quizReducerFunction = (state: QuizState, action: QuizActions): QuizState => {
    switch(action.type) {
        case "GET_ALL_QUIZZES": 
            return {
                ...state,
                allQuizzes: action.payload
            }
        case "START_QUIZ": 
            return { ...state, currentQuiz: action.payload }
        case "COMPLETE_QUIZ": 
            return { ...state, currentQuiz: initialQuizData } //save the current quiz
        case "INCREMENT_SCORE": 
            return {
                ...state,
                currentScore : state.currentScore + 2
            }
        case "DECREMENT_SCORE":
            return {
                ...state,
                currentScore : state.currentScore - 2
            }
        case "CHANGE_QUESTION":
            return {
                ...state,
                currentQuestion: action.payload
            }
        case "ADD_SELECTED_ANSWER":
            return {
                ...state,
                currentQuizAnswers: action.payload
            }
        case "RESET_SCORE": 
            return {
                ...state,
                currentScore: 0
            }
        case "RESET_QUIZ": 
            return initialQuizState
        default:
            return state
    }
}