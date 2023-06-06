import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mood unabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => setAlert(null), 1000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mood has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#1e0b69";
      showAlert("Dark mood has been enabled", "success");
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
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm heading="Text to test" mode={mode} Showalert={showAlert} />
      </div>
      <footer id="customFooter">Coded by Qazi Saboor</footer>
      {/* <About /> */}
    </>
  );
}

export default App;
