"use client";
import React, { useState } from "react";
import axiosInstance from "../../../../../config/axios";

const page = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState("");

  const handlePrompt = () => {
    axiosInstance.post("/thomas", { prompt }).then((responce) => {
      if (responce.data.errorMsg) {
        setError(responce.data.errorMsg);
      } else {
        console.log(responce.data);
        setText(responce.data);
      }
    });
  };
  return (
    <div className="flex flex-col h-full">
      {error && (
        <span className="mx-auto bg-red-500 text-white rounded-lg p-4">
          {error}
        </span>
      )}
      <div className="text m-4 h-full grow overflow-y-auto flex">
        {text ? (
          <span>{text}</span>
        ) : (
          <span className="m-auto">
            Type your query below and click on send button
          </span>
        )}
      </div>
      <div className="mx-8">
        <div className="bottom-3 border border-solid border-stone-400 rounded-full flex items-center p-2">
          <input
            type="text"
            placeholder="type something"
            className="grow"
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          />
          <button
            onClick={handlePrompt}
            className="icon text-white rounded-full text-2xl p-2 bg-bae-600"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
