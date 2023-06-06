import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

import { Routes, Route, BrowserRouter } from "react-router-dom";

// import { Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggle={toggleMode}
      />

      <Alert alert={alert} />
      {/* Render the Navbar component */}
      <Routes>
        {/* Define routes */}
        <Route
          path="/"
          element={
            <TextForm
              heading="Text to test"
              mode={mode}
              Showalert={showAlert}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer id="customFooter">Coded by Qazi Saboor</footer>
    </BrowserRouter>
  );
}

export default App;

// {/* <Router>
//   <Navbar
//     title="TextUtils"
//     aboutText="About"
//     mode={mode}
//     toggle={toggleMode}
//   />
//   <Alert alert={alert} />
//   <div className="container my-3">
//     <Switch>
//       <Route path="/about">
//         <About />
//       </Route>
//       <Route path="/dummy">
//         <Test />
//       </Route>
//       <Route path="/">
//         <TextForm
//           heading="Text to test"
//           mode={mode}
//           Showalert={showAlert}
//         />
//       </Route>
//     </Switch>
//   </div>
//   <footer id="customFooter">Coded by Qazi Saboor</footer>
// </Router> */}
// // <BrowserRouter>
// //   <Routes>
// //     <Navbar
// //       title="TextUtils"
// //       aboutText="About"
// //       mode={mode}
// //       toggle={toggleMode}
// //     />
// //     <Alert alert={alert} />
// //     <Route path="/">
// //       element =
// //       {
// //         <TextForm
// //           heading="Text to test"
// //           mode={mode}
// //           Showalert={showAlert}
// //         />
// //       }
// //     </Route>
// //     <Route path="/about">element = {<About />}</Route>
// //   </Routes>
// // </BrowserRouter>

// <>
