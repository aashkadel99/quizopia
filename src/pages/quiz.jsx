// import React from 'react'

import PageLayout from "../layouts/PageLayout";
import Option from "../components/Option";
import { useEffect, useState } from "react";

export default function Quiz({
  username,
  questions,
  score,
  setScore,
  setQuestions,
}) {
  const [options, setOptions] = useState();
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...(questions[currentQuestion]?.incorrect_answers || []),
        ])
    );
    console.log(options);
  }, [questions, currentQuestion]);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  const handleOptionSelect = (selectedOption) => {
    setSelected(selectedOption); // Update the selected option in the state if needed
    // Add your logic to handle the selected option (e.g., check if it is the correct answer)
  };

  return (
    <div>
      <PageLayout>
        <nav className="flex justify-between my-[2.5rem]">
          <p className="bg-white border-2 border-black py-[1rem] px-[2.5rem] rounded-full text-[1rem] font-semibold welcome-shadow">
            Welcome, {username}
          </p>
          <button className="bg-red rounded-full py-[0.5rem] px-[3rem] text-[1rem] text-white font-bold hover:bg-darkRed">
            QUIT
          </button>
        </nav>
        <div className="category-score flex justify-between mb-[2.5rem]">
          {questions && questions.length > 0 ? (
            <p className="text-[1.5rem] font-semibold">
              Category: {questions[currentQuestion]?.category}
            </p>
          ) : (
            <p className="text-[1.5rem] font-semibold">Category: Loading...</p>
          )}
          <p className="text-[1.5rem] font-semibold">Score: {score}</p>
        </div>
        {questions ? (
          <div className="quiz-main-content">
            <div className="quiz-content w-full border-4 border-black rounded-xl py-[3.25rem] px-[3.25rem] mb-[1.5rem] quiz-shadow">
              {error && (
                <p className="text-2xl text-red text-center font-bold mb-2">
                  ● Select atleast one option ●
                </p>
              )}
              <div className="question-wrapper flex items-center gap-[1.5rem] mb-8">
                <p className="question-number bg-black text-white text-[1.5rem] font-bold px-[1.1rem] py-[0.5rem] rounded-full">
                  {currentQuestion + 1}/10
                </p>
                <p className="question text-[1.5rem] font-bold">
                  {questions[currentQuestion].question}
                </p>
              </div>
              <div className="options w-full grid grid-cols-2 gap-10">
                {options &&
                  options.map((option) => (
                    <button>
                      <Option key={option} optionData={option} />
                    </button>
                  ))}
              </div>
            </div>
            <div className="next-button w-full flex justify-end">
              <button className="bg-white text-[1.5rem] font-bold px-[1.5rem] py-[1rem] border-2 border-black rounded-xl mb-4 hover:bg-blue next-shadow">
                Next Question
              </button>
            </div>
          </div>
        ) : (
          <p className="text-4xl font-extrabold text-center">Loading...</p>
        )}
      </PageLayout>
    </div>
  );
}
