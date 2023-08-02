import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Option from "../components/Option";
import { useNavigate } from "react-router-dom";

export default function Quiz({
  username,
  questions,
  score,
  setScore,
  setQuestions,
}) {
  const [options, setOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...(questions[currentQuestion]?.incorrect_answers || []),
        ])
    );
  }, [questions, currentQuestion]);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  const handleOptionSelect = (selectedOption) => {
    setSelected(selectedOption);
    setError(false);

    const isCorrect =
      selectedOption === questions[currentQuestion]?.correct_answer;
    if (isCorrect) {
      setScore(score + 10);
    }
  };

  const handleNextQuestion = () => {
    if (selected === null) {
      setError(true);
    } else {
      setSelected(null);
      setError(false);
      if (currentQuestion < 9) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz has ended, you can redirect to another page here or handle it accordingly.
      }
    }
  };

  const handleSubmit = () => {
    if (selected === null) {
      setError(true);
    } else {
      navigate("/score");
    }
  };

  const handleQuit = () => {
    setScore(0);
    navigate("/");
  };

  console.log("questioj", questions);
  return (
    <div>
      <PageLayout>
        <nav className="flex justify-between my-[2.5rem]">
          <p className="bg-white border-2 border-black py-[1rem] px-[2.5rem] rounded-full text-[1rem] font-semibold welcome-shadow">
            Welcome, {username}
          </p>
          <button
            className="bg-red rounded-full py-[0.5rem] px-[3rem] text-[1rem] text-white font-bold hover:bg-darkRed"
            onClick={handleQuit}
          >
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
                  ● Select at least one option ●
                </p>
              )}
              <div className="question-wrapper flex items-center gap-[1.5rem] mb-8">
                <p className="question-number bg-black text-white text-[1.5rem] font-bold px-[1.1rem] py-[0.5rem] rounded-full">
                  {currentQuestion + 1}/10
                </p>
                <div
                  className="question text-[1.5rem] font-bold"
                  dangerouslySetInnerHTML={{
                    __html: questions[currentQuestion]?.question,
                  }}
                />
              </div>
              <div className="options w-full grid grid-cols-2 gap-10">
                {options.length > 0 ? (
                  options.map((option) => {
                    console.log("currentQuestion", currentQuestion);

                    const isCorrect =
                      questions[currentQuestion]?.correct_answer === option;

                    const green =
                      (selected && isCorrect) ||
                      (selected === option && isCorrect);
                    const red = selected === option && !isCorrect;
                    return (
                      <>
                        <Option
                          key={option}
                          optionData={option}
                          disabled={selected !== null}
                          onClick={handleOptionSelect}
                          isCorrect={isCorrect}
                          className={
                            green ? "bg-green hover:bg-green" : red ? "bg-red hover:bg-red" : "bg-white"
                          }
                        />
                      </>
                    );
                  })
                ) : (
                  <p>Loading options...</p>
                )}
              </div>
            </div>
            <div className="next-button w-full flex justify-end">
              {currentQuestion + 1 < 10 ? (
                <button
                  className="bg-white text-[1.5rem] font-bold px-[1.5rem] py-[1rem] border-2 border-black rounded-xl mb-4 hover:bg-blue next-shadow"
                  onClick={handleNextQuestion}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="bg-white text-[1.5rem] font-bold px-[1.5rem] py-[1rem] border-2 border-black rounded-xl mb-4 hover:bg-blue next-shadow"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        ) : (
          <p className="text-4xl font-extrabold text-center">Loading...</p>
        )}
      </PageLayout>
    </div>
  );
}

// const [score,setScore]  = useState(0)
// const [currentQuestion,setCurrentQuestion]= useState(0)

// <QuizUI question={question[currentQuestion]?.question} options={} correctAnswer={} onSelect={(isCorrect)=>{
//   setScore(_s=>s+1)
//   setCurrentQuestion(_c=>c+1)

// }}/>



// QuizUI:

// const [selected,setSelected] = useState(null)

// const isCorrectSelected = correctAnswer ===selected

// selected==='this'?isCorrectSelected?'bg-green':'bg-red':'bg-whte'
// <option >1</option>
