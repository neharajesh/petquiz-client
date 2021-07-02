import { QuizCard } from "../Components/QuizCard"

export const Quiz = () => {
    return (<>
        <div className="pd-2">
            <h1> Quizes Page </h1>
            <p> This is the quizzes page and this is some content to test </p>
            <div className="h-100 flex flex-row-wrap">
                <div className="card-w-20 mg-05 pd-05 bdr-thin bdr-rad-m"> <QuizCard /> </div>                
                <div className="card-w-20 mg-05 pd-05 bdr-thin bdr-rad-m"> <QuizCard /> </div>
                <div className="card-w-20 mg-05 pd-05 bdr-thin bdr-rad-m"> <QuizCard /> </div>
                <div className="card-w-20 mg-05 pd-05 bdr-thin bdr-rad-m"> <QuizCard /> </div>
                <div className="card-w-20 mg-05 pd-05 bdr-thin bdr-rad-m"> <QuizCard /> </div>
            </div>
        </div>
    </>)
}