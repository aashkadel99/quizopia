// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./pages/quiz";
import Leaderboard from "./pages/leaderboard";
import Home from "./pages/home";
import "./index.css";
import Score from "./pages/score";
import defaultData from "./Data/ScoreData";

function App() {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const localData = localStorage.getItem("leaderboard");
    if (!localData) {
      localStorage.setItem("leaderboard", JSON.stringify(defaultData));
    }
  }, []);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

    const { data } = await axios.get(url);
    // console.log(data);
    setQuestions(data.results);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              username={username}
              setUsername={setUsername}
              fetchQuestions={fetchQuestions}
              setScore={setScore}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              username={username}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard username={username} score={score} />}
        />
        <Route
          path="/score"
          element={<Score username={username} score={score} />}
        />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
