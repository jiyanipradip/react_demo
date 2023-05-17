import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Car from './Car';
import reportWebVitals from './reportWebVitals';
import Profile from './Profile';
import Profilefun from './Profilefun';

//import Garage from './Garage';
//import Football from './Football';
//import Goal from './Goal';
//import MyForm from './MyForm';

/*function App1() {
    return (
      <div className="App1">
        <h1 style={{color:"yellow"}}>Hello World!456</h1>   
      </div>
    );
  }*/

//const myElement = <Car brand="Ford" />;
//const carInfo = <Car name= "Ford" model= "Mustang" />;
//const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <>
    <App />
    <Profile text={{name:"func comp"}} data="test cmp111" />
    <Profilefun text={{name:"func comp"}} data="test cmp" />
    </>
     //<App isApp={true} />
     //{myElement}
     //<Garage cars={cars}/>
     //{carInfo}
     //<Football />
     //<Goal isGoal={true} />
     //<MyForm />
    //<h1>Hello React!</h1>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);*/