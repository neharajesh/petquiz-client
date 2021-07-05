import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../Components/Context/Quiz/QuizContext";
import { QuestionCard } from "../Components/QuestionCard";

export const QuizPlayPage = () => {
    const { state, dispatch } = useQuiz();
    const [toggleView, setToggle] = useState<boolean>(false)
    const [questionNo, setQuestionNo] = useState<number>(1);
    const navigate = useNavigate();

    const loadAllQuestions = () => {
        setToggle(toggleView => !toggleView)
        dispatch({type: "CHANGE_QUESTION", payload: state.currentQuiz.questionsList[0]})
    }

    const showNextQuestion = () => {
        setQuestionNo(questionNo => questionNo + 1)
        questionNo+1 === state.currentQuiz.questionsList.length ? navigate("/result") :
        dispatch({type: "CHANGE_QUESTION", payload: state.currentQuiz.questionsList[questionNo]})
    }

    useEffect(() => {}, [questionNo])

    return (<>
        <div className="w-100 flex flex-items-center-x">
            <div className="w-50 pd-1 flex-col flex-items-center-y">
                <p className="txt-xl txt-700"> {state.currentQuiz.quizName} </p>             
                <button className={toggleView ? "display-none playButton" : "display-block playButton"} onClick={() => loadAllQuestions()}> Start Quiz! </button>

                <div className={!toggleView ? "display-none" : "display-block"}>
                    {console.log(state.currentQuestion)}
                    <p> Current Score : {state.currentScore} </p>
                    <QuestionCard question={state.currentQuestion} />
                    <div className="flex flex-items-center-x">
                        <button className="quizPlayPageButton" onClick={() => showNextQuestion()}> Next Question </button>
                        <button className="quizPlayPageButton"> Abort Quiz </button>  
                    </div>
                                
                </div>
            </div>
        </div>
    </>)
}