import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-5">
        <TextForm heading="Text to test" />
      </div>
    </>
  );
}

export default App;
