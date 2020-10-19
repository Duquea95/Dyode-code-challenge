import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards'
import InstagramReel from './components/InstagramReel'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import {
  LogoImage,
  MainHeroImages,
  MobileCardImages,
  DesktopCardImages,
  SubHeroImages,
  ProductImage,
  Arrows,
  SocialImages,
  SocialIcons,
  FormIcon
} from './Images.js'

function App() {

  return(
    <div className="App">
      <div className="body-wrapper">
        <Navbar image={LogoImage} announcement="FREE SHIPPING ON ALL ORDERS OVER $75"/>
        <main>
          <Hero
          images = {MainHeroImages}
          button = "black"
          />
          < ProductCards
          mobileImages = {MobileCardImages}
          desktopImages = {DesktopCardImages}
          />
          <Carousel image={ProductImage} arrows={Arrows}/>
          <Hero
          images = {SubHeroImages}
          button = "green"
          />
          <InstagramReel images={SocialImages}/>
        </main>
        <Footer images ={SocialIcons} EmailIcon={FormIcon}/>
      </div> 
    </div>
  )
}
export default App;
