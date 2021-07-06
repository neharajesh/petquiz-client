import "./auth.css"
import { useState } from "react"
import { registerUser } from "../../Api/UserApi";
import { useUser } from "../../Components/Context/User/UserContext";
import toast, { Toaster } from "react-hot-toast";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const { dispatch } = useUser();

    const signupHandler = async() => {
        const userData = { username: username, password: password }
        dispatch({type: "USER_SIGNUP", payload: { isLoading: true }})
        const response = await registerUser(userData)
        response.success ? toast.success(response.message) : toast.error(response.message)
        response.success && dispatch({type: "USER_SIGNUP", payload: { isLoading: false }})
        toast("Login to Play!")
    }

    return (<>
        <div>
            <Toaster />
            <h1> Register </h1>
            <div className="authContainer">
                <div className="inputContainer">
                    <p> Username </p>
                    <input onChange={e => setUsername(e.target.value)} type="text" className="inputField" />
                </div>
                <div className="inputContainer">
                    <p> Password </p>
                    <input onChange={e => setPassword(e.target.value)} type="password" className="inputField" />
                </div>
                <button onClick={() => signupHandler()} className="submitButton"> Register </button>
            </div>
        </div>
    </>)
}