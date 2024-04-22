"use client";
import Question from "@/components/Question";
import { useState } from "react";
// import Timer from "@/components/Timer";

const page = ({ params }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState({ hh: 1, mm: 30, ss: 35 });
  const [fetchedData, setFetchedData] = useState([
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Some unfamilar question",
      options: [
        "the first ans",
        "dont care about this",
        "shit",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea colors like blue?",
      options: [
        "coz its natural",
        "coz I am blind",
        "some random text",
        "None of the above",
      ],
      ans: 0,
    },
    {
      qid: 234567,
      qtext: "Why is the sea ",
      options: ["coz its na", "coz Ilind", "somrandom text", "Ne of the above"],
      ans: 0,
    },
  ]);
  console.log(params);
  return (
    <div className="flex h-full w-auto flex-col">
      <div className="border-b border-r border-solid border-stone-300 flex ">
        <div className="flex grow gap-1 p-1.5 overflow-x-auto border border-solid border-gray-300 mask-l">
          {fetchedData.map((d, index) => {
            return (
              <div
                key={index}
                className="size-9 grid place-items-center bg-stone-100 rounded-full shrink-0 cursor-pointer select-none"
                onClick={() => {
                  setCurrentQuestionIndex(index);
                }}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        {/* <Timer></Timer> */}
        {/* <div className="mx-2 self-center">{`${timer.hh}:${timer.mm}:${timer.ss}`}</div> */}
      </div>
      {/* <div className="tab flex border-b border-solid border-stone-300">
        <div className="*:px-3 *:py-2 overflow-x-auto flex grow mask-l">
          <button>Math</button>
          <button className="text-white bg-blue-500">Phycis</button>
          <button>Chemistry</button>
          <button>Biology</button>
          <button>Biology</button>
          <button>Biology</button>
          <button>Biology</button>
        </div>
        <div className="mx-2 self-center">{`${timer.hh}:${timer.mm}:${timer.ss}`}</div>
      </div> */}
      <div className="p-4 container mx-auto max-w-3xl flex flex-col grow">
        {/** question div */}
        <Question
          currentQuestion={fetchedData[currentQuestionIndex]}
          index={currentQuestionIndex}
          optionIndex={null}
        />
        <div className="actions flex gap-x-2 justify-end">
          <button
            className="border border-solid border-stone-200 px-4 py-2 rounded-md"
            disabled={currentQuestionIndex < 1}
            onClick={() => {
              setCurrentQuestionIndex(currentQuestionIndex - 1);
            }}
          >
            <span className="icon text-3xl">arrow_back</span>
          </button>
          <button className="border border-solid border-stone-200 px-4 py-2 rounded-md">
            Clear
          </button>
          <button className="border border-solid border-stone-200 px-4 py-2 rounded-md">
            Mark
          </button>
          <button
            className="border border-solid border-stone-200 px-4 py-2 rounded-md"
            onClick={() => {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            }}
          >
            {currentQuestionIndex === fetchedData.length - 1 ? (
              "Submit"
            ) : (
              <span className="icon text-3xl">arrow_forward</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
