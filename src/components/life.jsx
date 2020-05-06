import React, { useEffect, useState } from "react";
import heartregular from "../img/heart-regular.svg"; // Tell webpack this JS file uses this image
import heartsolid from "../img/heart-solid.svg";
const Life = ({ maxTries, tries }) => {
  return (
    <div className="mt-5 mb-5">
      {[...Array(maxTries - tries)].map((e, i) => (
        <img
          className="mr-5"
          key={i}
          width="40px"
          src={heartsolid}
          alt="Logo"
        />
      ))}
      {[...Array(tries)].map((e, i) => (
        <img
          className="mr-5"
          key={i}
          width="40px"
          src={heartregular}
          alt="Logo"
        />
      ))}
    </div>
  );
};

export default Life;
