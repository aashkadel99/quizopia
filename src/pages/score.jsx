// import React from 'react'
import { useNavigate } from "react-router-dom";

const Score = ({ username, score }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="w-full text-4xl text-center font-extrabold my-[4rem]">
        Your Score
      </p>
      <div className="username-score w-[80%] md:w-[50%] border-2 border-black rounded-lg form-shadow py-20 px-20 mb-10">
        <p className="text-3xl md:text-4xl mb-10">
          <span className="font-bold">Username:</span> {username}
        </p>
        <p className="text-4xl">
          <span className="font-bold">Score:</span> {score}
        </p>
      </div>
      <button
        className="text-2xl border-2 border-black rounded-lg font-bold py-4 px-8 hover:bg-blue next-shadow"
        onClick={handleSubmit}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Score;
