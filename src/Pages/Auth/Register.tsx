import "./auth.css"

export const Register = () => {
    return (<>
        <div>
            <h1> Register Page </h1>
            <div className="authContainer">
                <div className="inputContainer">
                    <p> Username </p>
                    <input type="text" className="inputField" />
                </div>
                <div className="inputContainer">
                    <p> Password </p>
                    <input type="text" className="inputField" />
                </div>
                <button className="submitButton"> Register </button>
            </div>
        </div>
    </>)
}