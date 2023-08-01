// import React from 'react'

const Option = ({ optionNumber, optionData, onSelect }) => {
  return (
    <div className="w-[37.5rem] border-4 border-black py-[3rem] px-[2rem] rounded-3xl options-shadow hover:bg-blue">
      <p className="text-[1.5rem] font-semibold">.{optionData}</p>
    </div>
  );
};

export default Option;
