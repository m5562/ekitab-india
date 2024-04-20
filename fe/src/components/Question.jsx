import React, { useState } from "react";

const Question = ({ currentQuestion, index, optionIndex }) => {
  const [activeOptionIndex, setactiveOptionIndex] = useState(optionIndex);

  return (
    <>
      <div className="mb-2 flex justify-between items-center">
        <div className="size-9 grid place-items-center bg-stone-100 rounded-full">
          {index + 1}
        </div>
        <div className="*:mr-4 *:text-gray-300 flex items-center justify-center">
          <span className="icon text-2xl">bookmark</span>
          <span className="icon text-2xl">star</span>
        </div>
      </div>
      <div className="grow">
        <div>{currentQuestion.qtext}</div>
        <div className="options flex flex-col gap-2 mt-4">
          {currentQuestion.options.map((opt, ind) => (
            <div
              key={ind}
              className={`p-4 rounded-lg bg-zinc-100 border border-solid ${
                activeOptionIndex === ind
                  ? "border-bae-600"
                  : "border-stone-200"
              }`}
              onClick={() => {
                setactiveOptionIndex(ind);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
