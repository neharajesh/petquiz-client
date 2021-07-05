import { Routes, Route } from "react-router-dom"
import { Layout } from "./Layout/Layout";
import { Home } from "./Pages/Home"
import { Quiz } from "./Pages/Quiz"
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { QuizPlayPage } from "./Pages/QuizPlayPage";
import { ResultPage } from "./Pages/ResultPage";

const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout> <Home /> </Layout>} />
            <Route path="/quiz" element={<Layout> <Quiz /> </Layout>} />
            <Route path="/quiz/:quizId" element={<Layout> <QuizPlayPage /> </Layout>} />
            <Route path="/result" element={<Layout> <ResultPage /> </Layout>} />
            <Route path="/signin" element={<Layout> <Login /> </Layout>} />
            <Route path="/signup" element={<Layout> <Register /> </Layout>} />
        </Routes>              
    </div>
  );
}

export default App;
