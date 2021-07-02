import { Link } from "react-router-dom"

export const Topbar = () => {
    return (<>
        <div className="topbarContainer">
            <button> 🌈Theme </button>
            <h1 className="header-brand"> PETQUIZ </h1>
            <nav>
                <Link className="navLink" to="/"> Home </Link>
                <Link className="navLink" to="/quiz"> Quiz </Link>
                <Link className="navLink" to="/profile"> Profile </Link>
                <Link className="navLink" to="/signin"> Login </Link>
                <Link className="navLink" to="/signup"> Register </Link>
            </nav>
        </div>
    </>)
}