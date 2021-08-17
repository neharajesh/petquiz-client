import { ThemeActions, ThemeStateType } from "./ThemeReducer.types";

export const initialThemeState:ThemeStateType = {
    theme: "light"
}

export const themeReducerFunction = (state:ThemeStateType, action: ThemeActions) : ThemeStateType => {
    switch(action.type) {
        case "SET_DARK_THEME":
            return {
                ...state,
                theme: "dark"
            }
        case "SET_LIGHT_THEME":
            return {
                ...state,
                theme: "light"
            }
        default: return state
    }
}