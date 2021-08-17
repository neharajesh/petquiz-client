import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { UserProvider } from './Components/Context/User/UserContext';
import { QuizProvider } from "./Components/Context/Quiz/QuizContext"
import { ThemeProvider } from './Components/Context/Theme/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
        <Router>
            <ThemeProvider>
                <UserProvider>
                    <QuizProvider>
                        <App />
                    </QuizProvider>
                </UserProvider>
            </ThemeProvider>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
