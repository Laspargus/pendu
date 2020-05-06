import React, { useEffect, useState } from "react";

import Word from "./components/word";
import Letter from "./components/letter";
import Life from "./components/life";
import Header from "./components/header";
import Choice from "./components/choice";

function App() {
  //State
  const [word, setWord] = useState("thpnext");
  const [isLoading, setIsLoading] = useState(true);
  const [letterChoice, setLetterChoice] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);
  const [userLetter, setUserLetter] = useState([]);
  const [tries, setTries] = useState(0);
  const maxTries = 5;
  const [status, SetStatus] = useState("pending");

  useEffect(() => {
    console.log(
      "Component is Update, because a state changed or the component is mounted"
    );
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((response) => response.json())
      .then((result) => {
        setWord(result[0]);
        setIsLoading(false);
      });
  }, []);

  const choiceLetter = (letter) => {
    if (!word.includes(letter)) {
      setTries(tries + 1);
    }

    if (!userLetter.includes(letter)) {
      setUserLetter(userLetter.concat(letter));
      const newletterChoice = letterChoice.filter((l) => l !== letter);
      setLetterChoice(newletterChoice);
    }

    let result = "win";

    for (let i = 0; i < word.length; i++) {
      if (!userLetter.includes(i)) {
        result = "pending";
      }
    }
    SetStatus(result);
  };

  useEffect(() => {
    if (tries >= maxTries) {
      SetStatus("Looser");
      console.log("tries: ", tries);
      console.log("maxtry: ", maxTries);
      console.log("status: ", status);
    }
  }, [tries, userLetter]);

  return (
    <div className="text-center App container mt-5">
      {/* <Header status={status} /> */}
      <Choice letters={userLetter} />
      {isLoading ? (
        <p> word is loading </p>
      ) : (
        <Word word={word} userLetter={userLetter} />
      )}
      <Life maxTries={maxTries} tries={tries} />
      {status == "Looser" ? (
        <div>Cest perdu</div>
      ) : (
        <Letter buttonclic={choiceLetter} letterChoice={letterChoice} />
      )}
    </div>
  );
}

export default App;
