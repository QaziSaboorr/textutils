import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mood unabled or not

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#1e0b69";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggle={toggleMode}
      />
      <div className="container my-5">
        <TextForm heading="Text to test" mode={mode} />
      </div>
      <footer id="customFooter">Coded by Qazi Saboor</footer>
      {/* <About /> */}
    </>
  );
}

export default App;
