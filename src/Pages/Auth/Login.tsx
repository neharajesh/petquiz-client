import "./auth.css"

export const Login = () => {
    return (<>
        <div>
            <h1> Login Page </h1>
            <div className="authContainer">
                <div className="inputContainer">
                    <p> Username </p>
                    <input type="text" className="inputField" />
                </div>
                <div className="inputContainer">
                    <p> Password </p>
                    <input type="text" className="inputField" />
                </div>
                <button className="submitButton"> Login </button>
            </div>
        </div>
    </>)
}