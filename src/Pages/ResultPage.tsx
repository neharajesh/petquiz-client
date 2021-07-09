import { useQuiz } from "../Components/Context/Quiz/QuizContext"

export const ResultPage = () => {
    const { state } = useQuiz();

    const fillOptionDiv = (answer:boolean, questionId:string, optionId:string) => {
        const selectedAnswer = state.currentQuizAnswers.find(selected => selected.currentQuestion._id === questionId)
        if (answer)
            return "fill-secondary-green txt-black flex w-75 bdr-thin bdr-grey bdr-rad-m mg-1 pd-1"
        if (selectedAnswer?.selectedAnswerId === optionId)
            return "fill-secondary-red txt-black flex w-75 bdr-thin bdr-grey bdr-rad-m mg-1 pd-1"
        return "flex w-75 bdr-thin bdr-grey bdr-rad-m mg-1 pd-1"
    }

    return (<>
        <div className="w-100 flex-col flex-items-center-y">
            <h1> Result Page </h1>
            <p className="mg-tb-05"> {state.currentQuiz.quizName} </p>
            <p className="mg-tb-05 txt-l"> You scored : <span className="txt-green"> {state.currentScore}/{state.currentQuiz.totalPoints} </span> </p>
            {state.currentQuiz.questionsList.map(question => <div className="w-50">
                <div className="w-100 mg-t-1 bdr-thin bdr-grey bdr-rad-m flex-col flex-items-center-y">
                    <img className="w-100 mg-b-2" src={question.image} alt={question.questionText} />
                    <p className="txt-l mg-025 mg-lr-1"> {question.questionText} </p>
                    <p> Points : {question.points} </p>
                    {question.options.map(option => <div 
                    className={fillOptionDiv(option.isRight, question._id, option._id)}                        
                    key={option._id}>
                        <p> {option.optionText} </p> 
                    </div>)}
                </div>
            </div>)}
        </div>
    </>)
}