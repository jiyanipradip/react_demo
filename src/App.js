import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (   
    <Router>
          <div className="App">           
                <Link to="/"> Home </Link>             
                <Link to="/About"> About Us </Link>             
                <Link to="/Contact"> Contact Us </Link>              
            <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route path='/About' element={< About />}></Route>
                 <Route path='/Contact' element={< Contact />}></Route>
            </Routes>
          </div>
    </Router>
  );
  /*const isApp = props.isApp;
  //alert(isApp);
  if (isApp) {
        return ( 
          <h1>Hello PJ!!</h1>  
        );
    }
        return (
          <h1>Hello pradip!!</h1> 
        );*/
}

export default App;