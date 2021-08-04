import { Link } from "react-router-dom"

export const Home = () => {
    return (<>
        <div>
            <h1> Home </h1>
            <p className="mg-05"> Welcome to PETQUIZ! </p>
            <p className="mg-05"> This is an animal quiz app, created using React + Typescript </p>
            <br />
            <h2 className="mg-t-05"> What can you do here? </h2>
            <p className="mg-05"> Play quizzes - without signing up </p>
            {/* <p className="mg-05"> Sign up to view player stats (highscores, quizzes played) and more! Coming Soon! </p> */}
            <br />
            <h2 className="mg-t-05"> Features Coming Soon </h2>
            <p className="mg-05"> Sign up to view player stats (highscores, quizzes played) and more! </p>
            <br />
            <Link to="/quiz" className="playNowButton"> Play Now! </Link>
        </div>
    </>)
}