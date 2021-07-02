export const QuizCard = () => {
    return (<>
        <h1> Card to display quizes </h1>
        <div>
            <p> Quiz Name </p> 
            <p> Quiz Points </p>
            <p> Maybe some categoies and stuff </p> 
            <button onClick={() => console.log("load quiz on click")}> Play! </button>        
        </div>
    </>)
}