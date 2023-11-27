import Info from "./components/Info";
import Navbar from "./components/Navbar";
import React, { useState } from 'react';
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import {link,Routes,Route, Router} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const [mycolor, setmycolor] = useState('none')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    console.log('clicked');
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#032644';
      showAlert('Dark mode Enabled', "success");
      document.title = 'Textutils-Home(Dark)';
      setInterval(() => {
        document.title = 'TextUtils is amazing'
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils now'
      }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode Enabled', "success")
      document.title = 'Textutils-Home'
    }
  }

  const handleRedColor = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'red'
      setmycolor('danger');
    }
    else {
      console.log("It is a light mode")
    }
  }
  const handlePurpleColor = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'purple';
      setmycolor('purple');
    }
    else {
      console.log("It is a light mode")
    }
  }
  return ( 
<>

    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} red={handleRedColor} purple={handlePurpleColor} />
      <Alert alert={alert} />
      <div className="container">

        <Routes>
          <Route exact path="/Info" element={<Info />}></Route>
          <Route exact path="/" element={<Textform mode={mode} heading='Enter Your Text to Preview'  />}></Route>
        </Routes>

      </div>
    </Router>



    </>
  );
}


export default App;
