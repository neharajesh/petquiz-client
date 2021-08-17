import { UserType } from "../../../Types/UserType"

export type UserState = {
    user: UserType,
    token: string,
    error?: string,
    isLoading: boolean
}

export type UserActions = 
| { type: "USER_SIGNIN", payload: UserState }
| { type: "USER_SIGNUP", payload: { isLoading: boolean } }
| { type: "USER_LOGOUT" }

export type UserDataType = {
    username: string,
    password: string
}