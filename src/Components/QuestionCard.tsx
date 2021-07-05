import { useEffect, useState } from "react";
import { OptionsType, QuestionType } from "../Types/QuizType"
import { useQuiz } from "./Context/Quiz/QuizContext"

type QuestionCardProps = {
    question: QuestionType
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    const { state, dispatch } = useQuiz();
    const [explanation, setExplanation] = useState<string>("");

    const checkAnswer = (question:QuestionType, option:OptionsType) => {
        console.log("clicked")
        option.isRight && dispatch({type: "INCREMENT_SCORE"})
        setExplanation(question.explanation)
        const selectedAnswers = [...state.currentQuizAnswers, {currentQuestion: question, selectedAnswerId: option._id}]
        console.log(selectedAnswers)
        dispatch({type: "ADD_SELECTED_ANSWER", payload: selectedAnswers})
    }

    useEffect(() => {
        setExplanation(" ")
    }, [state.currentQuestion])

    return (<>
        <div className="w-100 mg-t-1 bdr-thin bdr-rad-m flex-col flex-items-center-y">
            <img className="w-100 mg-b-2" src={question.image} alt={question.questionText} />
            <p className="txt-l mg-025 mg-lr-1"> {question.questionText} </p>
            <p> Points : {question.points} </p>
            {question.options.map(option => <div className="flex w-75 bdr-thin bdr-rad-m mg-1 pd-1" key={option._id} onClick={() => checkAnswer(question, option)}>
                <p> {option.optionText} </p> 
            </div>)}
            <p className="mg-2 txt-center"> {explanation} </p>
        </div>
    </>)
}