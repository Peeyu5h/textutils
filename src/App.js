import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



function App() {  
  const [mode, setMode] = useState('light'); // Whether dark Mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.background = "#001c46";
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.background = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" Home="Ghar" Search="Search ki Jagah"/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

     {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About />
          </Route> */}
         
          {/* <Route exact path="/"> */}
          <Textform showAlert={showAlert} heading="Enter Text Below To Analayze:" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
    {/* <About/> */}
    </div>
    {/* </Router> */}

    </>
  );
}

export default App;
