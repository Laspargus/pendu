import React, { useEffect, useState } from "react";

const Choice = ({ letters }) => {
  return (
    <div>
      {letters.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
};

export default Choice;
