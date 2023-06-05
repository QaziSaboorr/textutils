import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

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
          Convert to upper Case
        </button>
        <button className="btn btn-primary my-3 " onClick={handleloClick}>
          Convert to lower Case
        </button>

        <button
          className="btn btn-primary my-3 mx-3"
          onClick={() => clearText()}
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
