// import React from 'react';

const Option = ({ optionData, disabled, onClick, className }) => {
  const handleOptionClick = () => {
    if (!disabled && onClick) {
      onClick(optionData);
    }
  };

  return (
    <button
      className={`w-full border-4 border-black py-[3rem] px-[2rem] rounded-3xl options-shadow hover:bg-blue ${className}`}
      onClick={handleOptionClick}
      disabled={disabled}
    >
      <div
        className="text-[1.5rem] font-semibold"
        dangerouslySetInnerHTML={{ __html: optionData }}
      />
    </button>
  );
};

export default Option;
