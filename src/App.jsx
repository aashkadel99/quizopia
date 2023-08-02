// import React from "react";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./pages/quiz";
import Leaderboard from "./pages/leaderboard";
import Home from "./pages/home";
import "./index.css";
import Score from "./pages/score";

function App() {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);

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
        <Route path="/leaderboard" element={<Leaderboard username={username} score = {score}/>} />
        <Route
          path="/score"
          element={<Score username={username} score={score} />}
        />
      </Routes>
      {/* </div> */}
    </Router>
  );

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <Home
  //         username={username}
  //         setUsername={setUsername}
  //         fetchQuestions={fetchQuestions}
  //       />
  //     ),
  //   },
  //   {
  //     path: "/quiz",
  //     element: (
  //       <Quiz
  //         username={username}
  //         questions={questions}
  //         score={score}
  //         setScore={setScore}
  //         setQuestions={setQuestions}
  //       />
  //     ),
  //   },
  //   {
  //     path: "/leaderboard",
  //     element: <Leaderboard />,
  //   },
  // ]);

  // ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );
}

export default App;
