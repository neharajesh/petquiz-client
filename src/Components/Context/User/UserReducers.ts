import { UserActions, UserState } from "./UserReducers.types"

export const initialUserData = {
    _id: "",
    username: "",
    password: "",
    playedGames: [{
        quiz: "",
        highScore: 0
    }]
}

export const initialUserState = {
    user: initialUserData,
    token: "",
    error: "",
    isLoading: true
}

export const userReducerFunction = (state: UserState, action: UserActions) : UserState => {
    switch(action.type) {
        case "USER_SIGNIN": 
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                error: action.payload?.error,
                isLoading: action.payload.isLoading
            }
        case "USER_SIGNUP": 
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case "USER_LOGOUT":
            return {
                ...state,
                user: initialUserData,
                token: "",
                error: ""
            }
    }
}