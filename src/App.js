import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet'
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
     <Greet></Greet>

    <Dashboard/>
    
    </div>
  );
}

export default App;
