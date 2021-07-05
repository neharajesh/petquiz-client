import { UserType } from "../../../Types/UserType"
import { QuestionType, QuizType } from "../../../Types/QuizType"

export type SelectedAnswersType = {
    currentQuestion: QuestionType,
    selectedAnswerId: string
}

export type QuizState = {
    currentUser: UserType,
    allQuizzes: QuizType[],
    currentQuiz: QuizType,
    currentScore: number,
    currentQuestion: QuestionType,
    currentQuizAnswers: SelectedAnswersType[]
    error?: string
}

export type QuizActions = 
| { type: "GET_ALL_QUIZZES", payload: QuizType[] }
| { type: "START_QUIZ", payload: QuizType }
| { type: "COMPLETE_QUIZ" }
| { type: "INCREMENT_SCORE" }
| { type: "DECREMENT_SCORE" }
| { type: "CHANGE_QUESTION", payload: QuestionType }
| { type: "ADD_SELECTED_ANSWER", payload: SelectedAnswersType[] }
| { type: "RESET_QUIZ" }