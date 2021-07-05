import { Link } from "react-router-dom"
import { fetchCurrentQuiz } from "../Api/QuizApi"
import { QuizType } from "../Types/QuizType"
import { useQuiz } from "./Context/Quiz/QuizContext"

type QuizProps = {
    quiz: QuizType
}

export const QuizCard:React.FC<QuizProps> = ({quiz}): JSX.Element => {
    const { dispatch } = useQuiz();

    const setCurrentQuiz = async(quizId: string) => {
        const { quiz } = await fetchCurrentQuiz(quizId)
        dispatch({type: "START_QUIZ", payload: quiz })
    }
    return (<>        
        <div key={quiz._id} className="quizCard">
            <img className="h-100" src={quiz.image} alt={quiz.quizName} />
            <div className="pd-1 quizDetails">
                <div>
                    <p className="txt-700 txt-xl"> {quiz.quizName} </p>
                    <p className="mg-l-05 mg-tb-025"> {quiz.description} </p>
                    <div>{quiz.categories.map(category => <span className="categoryBadge">{category}</span>)}</div>
                </div>                
                <div>
                    <p className="mg-025"> No. of Questions: {quiz.questionsList.length} </p>
                    <p className="mg-025"> Points: {quiz.totalPoints} </p>                    
                </div>
                <Link className="playButton" onClick={() => setCurrentQuiz(quiz._id)} to={`/quiz/${quiz._id}`}> Play! </Link>
            </div>
        </div>
    </>) 
}