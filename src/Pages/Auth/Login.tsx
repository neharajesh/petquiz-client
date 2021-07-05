import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { loginUser } from "../../Api/UserApi";
import { useUser } from "../../Components/Context/User/UserContext";
import { Link } from "react-router-dom"
import "./auth.css"

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const { dispatch } = useUser();

    const signinHandler = async() => {
        const userData = { username: username, password: password }
        const response = await loginUser(userData)
        response.success ? toast.success(response.message) : toast.error(response.message)
        response.success && dispatch({ type: "USER_SIGNIN", payload: {
            user: response.user,
            token: response.authToken,
            isLoading: false
        }})
    }

    return (<>
        <div>
            <Toaster />
            <h1> Login Page </h1>
            <div className="authContainer">
                <div className="inputContainer">
                    <p> Username </p>
                    <input onChange={e => setUsername(e.target.value)} type="text" className="inputField" />
                </div>
                <div className="inputContainer">
                    <p> Password </p>
                    <input onChange={e => setPassword(e.target.value)} type="password" className="inputField" />
                </div>
                <button onClick={() => signinHandler()} className="submitButton"> Login </button>
            </div>
            <Link className="navLink" to="/signup"> Click here to Register </Link>
        </div>
    </>)
}