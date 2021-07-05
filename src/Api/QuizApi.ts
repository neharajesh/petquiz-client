import axios from "axios"
import { QuizType } from "../Types/QuizType"
import ROOT_URL from "../Utilities/AxiosUtils"

export const fetchAllQuizzes = async() => {
    try {
        const { data } = await axios.get(`${ROOT_URL}/quiz`)
        console.log(data)
        return data
    } catch (err) {
        console.log("Error fetching all quizzes,", err.message)
    }
}

export const addNewQuiz = async(quizData: QuizType) => {
    try {
        const { data } = await axios.post(`${ROOT_URL}/quiz`, quizData)
        console.log(data)
        return data
    } catch (err) { 
        console.log("Error adding new quiz,", err.message)
    }
}

export const fetchCurrentQuiz = async(quizId: string) => {
    try {
        const { data } = await axios.get(`${ROOT_URL}/quiz/${quizId}`)
        console.log(data)
        return data
    } catch (err) {
        console.log("Error fetching current quiz,", err.message)
    }
}