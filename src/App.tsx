import { Routes, Route } from "react-router-dom"
import { Layout } from "./Layout/Layout";
import { Home } from "./Pages/Home"
import { PlayerProfile } from "./Pages/PlayerProfile";
import { Quiz } from "./Pages/Quiz"
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";

const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout> <Home /> </Layout>} />
            <Route path="/quiz" element={<Layout> <Quiz /> </Layout>} />
            <Route path="/profile" element={<Layout> <PlayerProfile /> </Layout>} />
            <Route path="/signin" element={<Layout> <Login /> </Layout>} />
            <Route path="/signup" element={<Layout> <Register /> </Layout>} />
        </Routes>              
    </div>
  );
}

export default App;
