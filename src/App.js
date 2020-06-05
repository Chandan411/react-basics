import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet'
import Person from './components/Person'


function App() {
  return (
    <div className="App">
     <Greet></Greet>
     <hr color="Red"></hr>
    <Person/>
    </div>
  );
}

export default App;
