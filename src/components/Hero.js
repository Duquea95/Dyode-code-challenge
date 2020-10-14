import React from 'react'

const Hero = ({images}) => {
    console.log(images)

    return(
        <div className="hero">
            <div className="hero-container">
                <div className="hero-text__container column">
                    <div className="column">
                        <div className="container-fluid">
                            <div className="hero-text">
                                <div>
                                    <h1>Title Goes Here</h1>
                                </div>
                                <div>
                                    <p>Tagline will go right here</p>
                                </div>
                                <div></div>
                                <div className="button-wrap">
                                    <a className="shop-now__cta">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <picture>
                    <source media="(min-width: 1024px)" srcSet={images[0]}/>
                    <img src={images[1]} alt=""/>
                </picture>
            </div>
        </div>
    )
}

export default Hero