export type ThemeStateType = {
    theme: string
}

export type ThemeActions = 
| { type: "SET_DARK_THEME" }
| { type: "SET_LIGHT_THEME" }