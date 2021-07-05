import { useUser } from "../Components/Context/User/UserContext"

export const Sidebar = () => {
    const { state } = useUser();
    return (<>
        <div className="sidebarContainer">
            <h1> Player Stats </h1>
            <h3> Welcome, {state.user.username} </h3>
            <p> Highscores - list of all highscores from all games </p>
            <p> Highscore thing will be something like SM Superstar wala </p>
        </div>        
    </>)
}