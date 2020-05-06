import React, { useEffect, useState } from "react";

const Letter = ({ letterChoice, buttonclic }) => {
  return (
    <div>
      {letterChoice.map((letter, index) => (
        <button
          className="mr-2 btn btn-info"
          onClick={() => buttonclic(letter)}
          key={index}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letter;
