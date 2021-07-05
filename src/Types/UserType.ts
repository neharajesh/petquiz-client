type PlayedGamesType = {
    quiz: string,
    highScore: number
}

export type UserType = {
    _id: string,
    username: string,
    password: string,
    playedGames: Array<PlayedGamesType>
}