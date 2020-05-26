import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet'
import WelcomeCC from './components/WelcomeCC'
import Click from './components/ClickState'
import Form from './components/form'
import Table from './components/Table'


function App() {
  return (
    <div className="App">
     <Greet></Greet>
     <hr color="Red"></hr>
     <Form/>
     {/* <WelcomeCC/>
    <Click/> */}
    </div>
  );
}

export default App;
