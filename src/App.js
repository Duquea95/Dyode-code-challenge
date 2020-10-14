import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { MainHeroImages, ProductCardImages } from './Images.js'
import ProductCards from './components/ProductCards'

function App() {

  return(
    <div className="App">
      <div className="body-wrapper">
        <Navbar/>
        <main>
          <Hero
          images = {MainHeroImages}
          />
          <ProductCards images={ProductCardImages}/>
        </main>
        <footer></footer>
      </div> 
    </div>
  )
}
export default App;
