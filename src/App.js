
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(msg,type)=>{
    setAlert({msg:msg,type:type,});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <BrowserRouter>
    
    <Navbar/>
    <Alert/>
    
  
    <div className='container my-3'>
 <Routes>
    
   
          <Route exact path="/" element={<Home showAlert={showAlert}/> } />
          <Route exact path="/about" element={ <About/> } />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
      
        
      </Routes>
 
      </div>
    </BrowserRouter>
 
  );
}

export default App;
