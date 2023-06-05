import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-5">
        <TextForm heading="Text to test" />
      </div>
      <footer id="customFooter">Coded by Qazi Saboor</footer>
      {/* <About /> */}
    </>
  );
}

export default App;
