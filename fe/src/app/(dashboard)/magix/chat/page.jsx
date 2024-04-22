"use client";
import React, { useState } from "react";

const page = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="bottombar">
        <input
        className="border border-solid border-gray-300"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>
          <div className="icon">send</div>
        </button>
      </div>
    </div>
  );
};

export default page;
