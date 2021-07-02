export const QuizPlayCard = () => {
    return (<>
        <div>
            <p> Quiz Name </p>
            <p> Points </p>
            <p> Instructions </p>
            <p> Current Player's old scores </p>
            <button> Start Quiz </button>
            {/* When play button is clicked, show questions using question card. */}
            {/* Once a question is answered, the next question should load. */}
        </div>
    </>)
}