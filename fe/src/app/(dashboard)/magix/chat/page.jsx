"use client";
import React, { useState } from "react";
import axiosInstance from "../../../../../config/axios";

const page = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  axiosInstance.interceptors.request.use( 
    (config) => {
      // Check if token exists and headers are defined to avoid errors
      const token = JSON.parse(localStorage.getItem("userObj")).access_token;
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handlePrompt = () => {
    axiosInstance.post("/thomas", { prompt: text }).then((responce) => {
      if (responce.data.errorMsg) {
        setError(responce.data.errorMsg);
      } else {
        setText(responce.data.text);
      }
    });
  };
  return (
    <div className="flex flex-col">
      {error && (
        <span className="mx-auto bg-red-500 text-white rounded-lg p-4">
          {error}
        </span>
      )}
      <div className="text">{text}</div>
      <div className="mx-8">
        <div className="bottom-3 border border-solid border-stone-400 rounded-full flex items-center p-2">
          <input type="text" placeholder="type something" className="grow" />
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

// <div className="grow absolute mx-8">
// <div className="bottombar bottom-3 border border-solid border-stone-400 p-3 rounded-full">
//   <input
//     className="border border-solid border-gray-300"
//     type="text"
//     onChange={(e) => {
//       setText(e.target.value);
//     }}
//   />
//   <button>
//     <div className="icon">send</div>
//   </button>
// </div>
// </div>
