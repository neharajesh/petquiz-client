import React, { createContext, useContext, useReducer } from "react";
import { initialThemeState, themeReducerFunction } from "./ThemeReducer";
import { ThemeActions, ThemeStateType } from "./ThemeReducer.types";

type ThemeContextType = {
    themeState: ThemeStateType,
    themeDispatch: React.Dispatch<ThemeActions>
}

const ThemeContext = createContext <ThemeContextType> ({
    themeState: initialThemeState,
    themeDispatch: () => null
});

export const ThemeProvider:React.FC = ({children}) => {
    const [themeState, themeDispatch] = useReducer(themeReducerFunction, initialThemeState)
    return (<>
        <ThemeContext.Provider value={{themeState, themeDispatch}}>
            {children}
        </ThemeContext.Provider>
    </>)
}

export const useTheme = () => {
    return useContext(ThemeContext);
}