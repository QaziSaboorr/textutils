import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let Style = {
    width: "80px",
    height: "80px",
    margin: "10px 0px 10px 10px",
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const handleloClick = () => {
    let lowercaseTex = text.toLowerCase();
    setText(lowercaseTex);
  };

  const captilazeEachWord = (str) => {
    let words = str.split(" "); //array

    // Step 2: Capitalize the first character of each word
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Step 3: Join the capitalized words back together
    setText(words.join(" ")); //array joined by spacing
  };

  const speak = () => {
    let SpeechoBJ = new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(SpeechoBJ);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    let text = document.getElementById("my-Box");
    text.select();

    navigator.clipboard.writeText(text.value);
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
        <button
          className="btn btn-primary "
          onClick={handleUpClick}
          style={Style}
        >
          Convert to upper Case
        </button>
        <button
          className="btn btn-primary "
          onClick={handleloClick}
          style={Style}
        >
          Convert to lower Case
        </button>
        <button
          style={Style}
          className="btn btn-primary "
          onClick={() => {
            captilazeEachWord(text);
          }}
        >
          Captilize each word.
        </button>

        <button className="btn btn-primary " onClick={speak} style={Style}>
          Read Text
        </button>

        <button className="btn btn-primary " onClick={handleCopy} style={Style}>
          Copy text
        </button>

        <button
          className="btn btn-primary "
          onClick={handleExtraSpaces}
          style={Style}
        >
          remove extra spaces
        </button>

        <button
          className="btn btn-primary my-3 mx-3"
          onClick={() => clearText()}
          style={Style}
        >
          Clear Text
        </button>
      </div>
      <div className="container mx-3">
        <h3>Your text Summary</h3>
        <p>
          Number of Words:
          {text.split(" ").length - 1}
        </p>
        <p>
          Number of characters:
          {text.length}
        </p>

        <p>
          Minutes to read:
          {(text.split(" ").length - 1) * 0.008}
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
