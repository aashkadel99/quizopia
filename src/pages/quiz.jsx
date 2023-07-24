// import React from 'react'

import PageLayout from "../layouts/PageLayout";
import Option from "../components/Option"

export default function quiz() {
  return (
    <div>
      <PageLayout>
        <nav className="flex justify-between my-[2.5rem]">
          <p className="bg-white border-2 border-black py-[1rem] px-[2.5rem] rounded-full text-[1rem] font-semibold welcome-shadow">
            Welcome, Aashish
          </p>
          <button className="bg-red rounded-full py-[0.5rem] px-[3rem] text-[1rem] text-white font-bold hover:bg-darkRed">
            QUIT
          </button>
        </nav>
        <div className="category-score flex justify-between mb-[2.5rem]">
          <p className="text-[1.5rem] font-semibold">Category: Science</p>
          <p className="text-[1.5rem] font-semibold">Score: 10</p>
        </div>
        <div className="quiz-content w-full border-4 border-black rounded-xl py-[3.25rem] px-[3.25rem] mb-[1.5rem] quiz-shadow">
          <div className="question-wrapper flex items-center gap-[1.5rem] mb-8">
            <p className="question-number bg-black text-white text-[1.5rem] font-bold px-[1.1rem] py-[0.5rem] rounded-full">
              1/10
            </p>
            <p className="question text-[1.5rem] font-bold">
              Who invented the telescope?
            </p>
          </div>
          <div className="options w-full grid grid-cols-2 gap-10">
            <Option optionNumber="A" optionData="Michael Jackson"/>
            <Option optionNumber="B" optionData="Michael Jackson"/>
            <Option optionNumber="C" optionData="Michael Jackson"/>
            <Option optionNumber="D" optionData="Michael Jackson"/>
          </div>
        </div>
        <div className="next-button w-full flex justify-end">
          <button className="bg-white text-[1.5rem] font-bold px-[1.5rem] py-[1rem] border-2 border-black rounded-xl next-shadow">
            Next Question
          </button>
        </div>
      </PageLayout>
    </div>
  );
}
