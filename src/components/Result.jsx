import React from "react";

const Result = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => {
        return (
          <div key={index}>
            <h1 className="text-pink-700 font-extrabold">{result.title}</h1>
            <p>{result.overview}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
