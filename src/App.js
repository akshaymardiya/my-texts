import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("success", "Dark Mode set Successfully");
    } else {
      setMode("light");
      showAlert("success", "Light Mode set Successfully");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="My Texts" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
              />
            </Route>
            {/* <Route exact path="/about">
              <About />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
