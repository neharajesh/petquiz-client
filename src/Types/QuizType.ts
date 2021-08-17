export type OptionsType = {
    _id: string,
    optionText: string,
    isRight: boolean
}

export type QuestionType = {
    _id: string,
    questionText: string,
    image: string,
    points: number,
    options: Array<OptionsType>,
    explanation: string
}

export type QuizType = {
    _id: string,
    quizName: string,
    image: string,
    categories: String[],
    description: string,
    totalPoints: number,
    questionsList: Array<QuestionType>
}