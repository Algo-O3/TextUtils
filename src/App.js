import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,//note that in react-router-dom version 6 'Switch' is replaced by 'Routes'
  Route
} from "react-router-dom";

function App() {

  const [getMode,setMode] = useState('light')
  const [getTxt,setTxt] = useState('dark')
  const [alert,setalert] = useState(null);

  const showalert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);

  }

  const changeMode = () =>{
    if(getMode ==='light')
    {
      setMode('dark');
      setTxt('light');
      document.body.style.backgroundColor = '#143d78'
      showalert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      setTxt('dark');
      document.body.style.backgroundColor = 'white'
      showalert("Dark mode has been disabled","success")
    }
  }
  
  return (
    <>
     <Router>
     <Navbar title="TextUtils" home="Home" mode={getMode} click={changeMode} txt={getTxt}/>
     <Alert alert = {alert}/>
     <div className="container my-3">
     <Routes>
          <Route exact path='/' element={<TextForm header="Enter text to analyse" txt={getTxt} mode={getMode}/>}/>
          <Route exact path='/about' element={<About txt={getTxt} mode={getMode}/>}/>      
      </Routes>
     </div>
     </Router>
     </>
  );
}

export default App;

