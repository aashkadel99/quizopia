// import React from 'react';

const Option = ({ optionData, disabled, onClick, className }) => {
  const handleOptionClick = () => {
    if (!disabled && onClick) {
      onClick(optionData);
    }
  };

  return (
    <button
      className={`w-[37.5rem] border-4 border-black py-[3rem] px-[2rem] rounded-3xl options-shadow hover:bg-blue`}
      onClick={handleOptionClick}
      disabled={disabled}
    >
      <p className="text-[1.5rem] font-semibold">{optionData}</p>
    </button>
  );
};

export default Option;
