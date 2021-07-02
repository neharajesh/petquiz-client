export const QuestionCard = () => {
    return (<>
        <h1> Question Card </h1>
        <div>
            <p> Question </p>
            <p> Points </p>
            <div>
                <p> Option 1 </p> <button> Choose </button>
                <p> Option 2 </p> <button> Choose </button>
                <p> Option 3 </p> <button> Choose </button>
                <p> Option 4 </p> <button> Choose </button>
            </div>
            <button> Next Question </button>
            {/* Once the next question button is clicked, the next question should load. */}
            <button> Abort Quiz </button>
            {/* If this button is clicked, show a modal saying that quiz progress will not be saved */}
        </div>
    </>)
}