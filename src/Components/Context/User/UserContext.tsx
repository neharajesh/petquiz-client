import { createContext, useContext, useReducer } from "react";
import { initialUserState, userReducerFunction } from "./UserReducers";
import { UserActions, UserState } from "./UserReducers.types";

type UserContextType = {
    state: UserState,
    dispatch: React.Dispatch<UserActions>
}

const UserContext = createContext <UserContextType> ({
    state: initialUserState,
    dispatch: () => null
});

export const UserProvider : React.FC = ({children}) => {
    const [state, dispatch] = useReducer(userReducerFunction, initialUserState)
    
    return (<>
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    </>)
}

export const useUser = () => {
    return useContext(UserContext)
}