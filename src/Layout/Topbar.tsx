import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom"
import { useTheme } from "../Components/Context/Theme/ThemeContext";
import { useUser } from "../Components/Context/User/UserContext"

export const Topbar = () => {
    const { state, dispatch } = useUser();
    const { themeState, themeDispatch } = useTheme();

    const logoutHandler = () => {
        dispatch({type: "USER_LOGOUT"})
        toast.success("Logged out successfully")
    }

    const themeHandler = () => {
        console.log(themeState)
        themeState.theme === "light" 
        ? themeDispatch({type: "SET_DARK_THEME"}) 
        : themeDispatch({type: "SET_LIGHT_THEME"})
    }

    return (<>
        <div className="topbarContainer">
            <Toaster />
            <button className="themeButton" onClick={themeHandler}> 🌈Change Theme </button>
            <h1 className="header-brand"> PETQUIZ </h1>
            <nav>
                <Link className="navLink" to="/"> Home </Link>
                <Link className="navLink" to="/quiz"> Quiz </Link>
                
                {state.user.username === "" 
                    ? <Link className="navLink" to="/signin"> Login </Link> 
                    : <Link onClick={() => logoutHandler()} className="navLink" to="/signin"> Logout </Link>
                }
                
            </nav>
        </div>
    </>)
}