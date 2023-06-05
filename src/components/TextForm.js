import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
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
      <button className="btn btn-primary my-3" onClick={handleUpClick}>
        Convert to uppercase
      </button>
    </div>
  );
}
