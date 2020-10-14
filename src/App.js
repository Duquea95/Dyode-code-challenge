import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  MainHeroImages,
  ProductCardImages,
  SubHeroImages,
} from './Images.js'
import ProductCards from './components/ProductCards'

function App() {

  return(
    <div className="App">
      <div className="body-wrapper">
        <Navbar/>
        <main>
          <Hero
          images = {MainHeroImages}
          button = {"black"}
          />
          <ProductCards images={ProductCardImages}/>
          <Hero
          images = {SubHeroImages}
          button = {"green"}
          />
        </main>
        <footer></footer>
      </div> 
    </div>
  )
}
export default App;
