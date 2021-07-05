import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { UserProvider } from './Components/Context/User/UserContext';
import { QuizProvider } from "./Components/Context/Quiz/QuizContext"

ReactDOM.render(
  <React.StrictMode>
        <Router>
            <UserProvider>
                <QuizProvider>
                    <App />
                </QuizProvider>
            </UserProvider>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
