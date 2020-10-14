import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return(
    <div className="App">
      <div className="body-wrapper">
        <Navbar/>
        <main></main>
        <footer></footer>
      </div> 
    </div>
  )
}
export default App;
