import { useQuiz } from "../Components/Context/Quiz/QuizContext"
import { QuizCard } from "../Components/QuizCard"

export const Quiz = () => {
    const { state } = useQuiz();
    return (<>
        <div className="w-100 flex flex-row-wrap mg-b-2 flex-items-center-x">
            {state.allQuizzes.map(quiz => <QuizCard quiz={quiz} /> )}
        </div>
    </>)
}