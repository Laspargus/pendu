import React, { useEffect, useState } from "react";

const Word = ({ word, userLetter }) => {
  word.split("").map((letter, key) => {
    if (userLetter.includes(letter)) {
      console.log(letter);
    }
  });

  return (
    <h1 className="mt-5 mb-5">
      {" "}
      {word.split("").map((letter, index) => {
        let display = "invisible";

        if (userLetter.includes(letter)) {
          display = "visible";
        }

        return <span key={index}>{display === "visible" ? letter : "_ "}</span>;
      })}
    </h1>
  );
};

export default Word;
