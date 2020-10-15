import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  MainHeroImages,
  ProductCardImages,
  SubHeroImages,
  SocialIcons,
  FormIcon
} from './Images.js'
import ProductCards from './components/ProductCards'
import InstagramReel from './components/InstagramReel'
import Footer from './components/Footer'

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
        <Footer images ={SocialIcons} EmailIcon={FormIcon}/>
      </div> 
    </div>
  )
}
export default App;
