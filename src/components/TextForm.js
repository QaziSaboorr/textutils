import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let Style = {
    width: "100px",
    height: "60px",
    margin: "10px 0px 10px 10px",
    backgroundColor: props.mode === "dark" ? "darkgrey" : "blue",
    color: props.mode === "dark" ? "white" : "white",
    fontSize: "xx-smallx",
  };
  let clearStyle = {
    width: "100px",
    height: "60px",
    margin: "10px 0px 10px 10px",
    fontSize: "xx-smallx",
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.Showalert("Text has been captilaize.", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
    props.Showalert("Text has been deleted.", "warning");
  };

  const handleloClick = () => {
    let lowercaseTex = text.toLowerCase();
    setText(lowercaseTex);
    props.Showalert("Text has been made lower.", "success");
  };

  const captilazeEachWord = (str) => {
    let words = str.split(" "); //array

    // Step 2: Capitalize the first character of each word
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Step 3: Join the capitalized words back together
    setText(words.join(" ")); //array joined by spacing
    props.Showalert("Each word has been captilazied.", "success");
  };

  const speak = () => {
    let SpeechoBJ = new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(SpeechoBJ);
    props.Showalert("Speech enabled", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.Showalert("Extra white spaces has been removed.", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    props.Showalert("Text has been copied.", "success");
  };

  return (
    <>
      <div className="container my-5">
        <div
          className="container"
          style={{
            backgroundColor: props.mode === "dark" ? "#1e0b69" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>

          <div className="form-group">
            <textarea
              onChange={handleOnChange}
              className="form-control"
              value={text}
              id="my-Box"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "#1e0b69" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button
            className="btn btn-primary "
            onClick={handleUpClick}
            style={Style}
            disabled={text.length === 0}
          >
            Upper Case
          </button>
          <button
            className="btn btn-primary "
            onClick={handleloClick}
            style={Style}
            disabled={text.length === 0}
          >
            Lower Case
          </button>
          <button
            disabled={text.length === 0}
            style={Style}
            className="btn btn-primary "
            onClick={() => {
              captilazeEachWord(text);
            }}
          >
            Captilize words
          </button>

          <button
            className="btn btn-primary "
            onClick={speak}
            style={Style}
            disabled={text.length === 0}
          >
            Read Text
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary "
            onClick={handleCopy}
            style={Style}
          >
            Copy text
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary "
            onClick={handleExtraSpaces}
            style={Style}
          >
            Rm extra spaces
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-danger my-3 mx-3"
            onClick={() => clearText()}
            style={clearStyle}
          >
            Clear Text
          </button>
        </div>
        <div
          disabled={text.length === 0}
          className="container my-5"
          style={{
            backgroundColor: props.mode === "dark" ? "#1e0b69" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h3>Your text Summary</h3>
          <p>
            Number of Words:
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </p>
          <p>
            Number of characters:
            {text.length}
          </p>

          <p>
            Minutes to read:
            {text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length * 0.008}
          </p>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text : "Nothing to preview   !"}</p>
        </div>
      </div>
    </>
  );
}
