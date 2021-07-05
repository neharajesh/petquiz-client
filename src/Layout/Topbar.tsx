import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom"
import { useUser } from "../Components/Context/User/UserContext"

export const Topbar = () => {
    const { state, dispatch } = useUser();

    const logoutHandler = () => {
        dispatch({type: "USER_LOGOUT"})
        toast.success("Logged out successfully")
    }

    return (<>
        <div className="topbarContainer">
            <Toaster />
            <button> 🌈Theme </button>
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