import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Textutils-Dark Mode";
      setInterval(() => {
        document.title = "Textutils is Awesome";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutils Now!!";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Textutils-Light Mode";
    }
  };
  return (
    <>
    {/* // <> </>  is a jsx fragment and it is used because we can return only one tag */}
      {/* <Navbar title="textutils3" aboutText="About Textutils"/> */}
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes> */}
            {/* we should write react because react use partial matching so when it is completely matches then it it should run */}
            {/* <Route exact path="/about"
              element={<About/>} />
            
            <Route exact path="/"
              element={<Textform
                showAlert={showAlert}
                heading="Enter the text to analize"
                mode={mode}
              />} */}
              <Textform
                showAlert={showAlert}
                heading="Enter the text to analize"
                mode={mode}
              />
            {/*</div>/>
              </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
