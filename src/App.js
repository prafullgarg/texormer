import "./App.css";
import Navbar from "./navbar";
import TextForm from "./text-form";
import About from "./About.js";
import React, { useState } from "react";
import Alert from "./Alert.js";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light"); // it states whether mode is light mode or dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b3054";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="Texormer"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm id="text-form" mode={mode} showAlert={showAlert} />
        <About mode={mode}/>
      </div>
    </>
  );
}

export default App;
