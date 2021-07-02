import "./layout.css"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"

export const Layout : React.FC = ({children}) => {
    return(<>
        <div className="appContainer">
            <Topbar />
            <div className="pageContainer"> 
                <div className="screenContainer"> {children} </div>
                {/* <Sidebar /> */}
            </div>
        </div>
    </>)
}