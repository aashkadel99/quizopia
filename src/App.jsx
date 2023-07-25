// import React from "react";
import { Link } from "react-router-dom";
import quizopiaTitle from "./assets/quizopia_title.svg";
import qMarkOne from "./assets/qmark_1.svg";
import qMarkTwo from "./assets/qmark_2.svg";
import qMarkThree from "./assets/qmark_3.svg";
import qMarkFour from "./assets/qmark_4.svg";
import qMarkFive from "./assets/qmark_5.svg";
import PageLayout from "./layouts/PageLayout";
import "./App.css";

function App() {
  return (
    <div>
      <PageLayout>
        <img src={quizopiaTitle} alt="Title Image" className="mt-8" />
        <div className="subheading-and-button flex items-center w-full justify-between">
          <p className="text-[1.8rem] mt-2 mb-6">
            Unlock Your Knowledge: The Ultimate Quiz Challenge!
          </p>
          <Link to="/leaderboard">
            <button className="font-bold text-[1rem] border-2 border-black py-[0.5rem] px-[1rem] rounded-lg hover:bg-black hover:text-white">
              View Leaderboard
            </button>
          </Link>
        </div>
        <div className="home-content-wrapper flex justify-between">
          <form
            action=""
            className="py-[4rem] px-[3rem] border-2 bg-white border-black w-[32rem] rounded-2xl form-shadow"
          >
            <div className="username-wrapper flex flex-col gap-[0.5rem] mb-[1rem]">
              <label htmlFor="username" className="text-[1.125rem]">
                Username
              </label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                className="border-2 border-black w-[25.5rem] py-[0.5rem] px-[1rem] rounded-lg text-[1.2rem]"
              />
            </div>
            <div className="category-wrapper flex flex-col gap-[0.5rem] mb-[1rem]">
              <label htmlFor="category" className="text-[1.125rem]">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border-2 border-black w-[25.5rem]  py-[0.5rem] px-[1rem] rounded-lg text-[1.2rem]"
              >
                <option value="any">Any Category</option>
                <option value="any">General Knowledge</option>
                <option value="any">Entertainment: Film</option>
                <option value="any">Entertainment: Music</option>
                <option value="any">Entertainment: Musicals & Theatres</option>
                <option value="any">Entertainment: Television</option>
                <option value="any">Video Games</option>
                <option value="any">Board Games</option>
              </select>
            </div>
            <div className="difficulty-wrapper flex flex-col gap-[0.5rem] mb-[2.5rem]">
              <label htmlFor="difficulty" className="text-[1.125rem]">
                Difficulty
              </label>
              <select
                name="difficulty"
                id="difficulty"
                className="border-2 border-black w-[25.5rem]  py-[0.5rem] px-[1rem] rounded-lg text-[1.2rem]"
              >
                <option value="any">Any Difficulty</option>
                <option value="any">Easy</option>
                <option value="any">Medium</option>
                <option value="any">Hard</option>
              </select>
            </div>
            <Link to="/quiz">
              <button className="w-full border-4 border-black py-[0.5rem] px-[1rem] text-[1.25rem] font-bold rounded-xl hover:bg-black hover:text-white">
                Play Quiz
              </button>
            </Link>
          </form>
          <div className="illustrations relative w-[26rem] mr-[10rem]">
            <img
              src={qMarkOne}
              width="25%"
              alt="question mark one"
              className="absolute left-[2.5rem] animate-one"
            />
            <img
              src={qMarkTwo}
              width="10%"
              alt="question mark two"
              className="absolute top-20 right-[2.5rem] animate-two"
            />
            <img
              src={qMarkThree}
              width="15%"
              alt="question mark three"
              className="absolute bottom-[7rem] left-20 animate-three"
            />
            <img
              src={qMarkFour}
              width="20%"
              alt="question mark four"
              className="absolute bottom-[12.5rem] right-[6.5rem] animate-four"
            />
            <img
              src={qMarkFive}
              width="10%"
              alt="question mark "
              className="absolute bottom-[4rem] right-[6rem] animate-five"
            />
          </div>
        </div>
      </PageLayout>
    </div>
  );
}

export default App;
