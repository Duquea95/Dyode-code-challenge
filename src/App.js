import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Images from './Images.js' 
import ProductCards from './components/ProductCards'

function App() {

  return(
    <div className="App">
      <div className="body-wrapper">
        <Navbar/>
        <main>
          <Hero
          images = {Images}
          />
          <ProductCards images={Images}/>
        </main>
        <footer></footer>
      </div> 
    </div>
  )
}
export default App;
