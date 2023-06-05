import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");

  const [intialWord, wordUpdated] = useState(16);
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const WordCount = (text) => {
    wordUpdated(text.split(" ").length);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="form-group">
          <textarea
            onChange={handleOnChange}
            className="form-control"
            value={text}
            id="my-Box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary my-3"
          onClick={() => WordCount(text)}
        >
          Number of Words
        </button>
      </div>
      <div className="container mx-3">
        <h3>Your text Summary</h3>
        <p>Number of Words {intialWord} </p>
        <p>Number of characters {text.length}</p>
      </div>
    </>
  );
}
