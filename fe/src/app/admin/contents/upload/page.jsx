"use client";
import React, { useState } from "react";

const page = () => {
  const [dataStr, setDataStr] = useState({});
  const [error, setError] = useState(false);
  const handleChange = (val) => {
    try {
      const jsonVal = JSON.parse(val);
      setDataStr(jsonVal);
      setError(false);
    } catch (e) {
      setDataStr("");
      setError(true);
    }
  };
  return (
    <div className="h-dvh">
      <div className="container mx-auto">
        <div className="font-bold text-2xl text-center">
          Add a question set here
        </div>
        <textarea
          cols="30"
          className={`border border-solid outline-none ${
            error ? "border-red-500" : "border-bae-500"
          } w-full mt-2`}
          rows="10"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          placeholder="Please use correct parenthesizes"
        ></textarea>
        {error}
        <div>{console.log(dataStr)}</div>
      </div>
    </div>
  );
};

export default page;
