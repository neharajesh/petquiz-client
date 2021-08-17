import { useTheme } from "../Components/Context/Theme/ThemeContext"
// import { useUser } from "../Components/Context/User/UserContext"
import "./layout.css"
// import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"

export const Layout : React.FC = ({children}) => {
    // const { state } = useUser();
    const { themeState } = useTheme();

    return(<>
        <div className="appContainer">
            <Topbar />
            <div className={themeState.theme==="light" ? "darkTheme pageContainer" : "pageContainer"}>
                {/* <div className={themeState.theme==="light" ? "darkTheme screenContainer" : "screenContainer"}> {children} <br /> </div>
                {state.user.username !== "" && <Sidebar />} */}
                <div className="screenContainer"> {children} <br /> </div>
            </div>
        </div>
    </>)
}