// import React from 'react';

const Option = ({ optionData, disabled, onClick, className }) => {
  const handleOptionClick = () => {
    if (!disabled && onClick) {
      onClick(optionData);
    }
  };

  return (
    <button
      className={`w-full border-4 border-black py-[2rem] px-[1rem] md:py-[3rem] md:px-[2rem] rounded-3xl options-shadow hover:bg-blue ${className}`}
      onClick={handleOptionClick}
      disabled={disabled}
    >
      <div
        className="text-[1.2rem] md:text-[1.5rem] font-semibold"
        dangerouslySetInnerHTML={{ __html: optionData }}
      />
    </button>
  );
};

export default Option;
