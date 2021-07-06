import { useEffect, useState } from "react";
import { OptionsType, QuestionType } from "../Types/QuizType"
import { useQuiz } from "./Context/Quiz/QuizContext"

type QuestionCardProps = {
    question: QuestionType
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    const { state, dispatch } = useQuiz();
    const [explanation, setExplanation] = useState<string>("");
    const [clicked, setClicked] = useState<string>("")

    const checkAnswer = (question:QuestionType, option:OptionsType) => {
        setClicked(option._id)
        option.isRight && dispatch({type: "INCREMENT_SCORE"})
        setExplanation(question.explanation)
        const selectedAnswers = [...state.currentQuizAnswers, {currentQuestion: question, selectedAnswerId: option._id}]
        dispatch({type: "ADD_SELECTED_ANSWER", payload: selectedAnswers})
    }

    useEffect(() => {
        setExplanation(" ")
    }, [state.currentQuestion])

    return (<>
        <div className="w-100 mg-t-1 bdr-thin bdr-rad-m bdr-grey flex-col flex-items-center-y">
            <img className="w-100 mg-b-2" src={question.image} alt={question.questionText} />
            <p className="txt-l mg-025 mg-lr-1"> {question.questionText} </p>
            <p> Points : {question.points} </p>
            {question.options.map(option => <div className={clicked===option._id ? "fill-secondary-yellow flex w-75 bdr-thin bdr-rad-m bdr-grey mg-1 pd-1 csr-point" : "flex w-75 bdr-thin bdr-rad-m bdr-grey mg-1 pd-1 csr-point"} key={option._id} onClick={() => checkAnswer(question, option)}>
                <p> {option.optionText} </p> 
            </div>)}
            <p className="mg-2 txt-center"> {explanation} </p>
        </div>
    </>)
}