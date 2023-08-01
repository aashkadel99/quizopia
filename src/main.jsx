// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Quiz from "./pages/quiz";
// import Leaderboard from "./pages/leaderboard";
// import Home from "./pages/home";
// import "./index.css";

// import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";

import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(<App />);
