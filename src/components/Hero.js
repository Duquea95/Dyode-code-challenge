import React from 'react'

const Hero = ({images, button}) => {

    return(
        <div className="hero">
            <div className="hero-container">
                <div 
                className={`column hero-text__container 
                    ${button === "black" ? "hero-text__container-left": "hero-text__container-right"}`}
                >
                    <div className="column">
                        <div>
                            <div className="hero-text">
                                <div>
                                    <h1>Title Goes Here</h1>
                                </div>
                                <div>
                                    <p className="hero-copy">Tagline will go right here</p>
                                </div>
                                <div className="button-wrap">
                                    {button === "black" &&
                                        <a className="shop-now__cta black-button">SHOP NOW</a>
                                    }
                                    {button === "green" &&
                                        <a className="shop-now__cta green-button">SHOP NOW</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <picture>
                    <source media="(min-width: 768px)" srcSet={images[0]}/>
                    <img src={images[1]} alt=""/>
                </picture>
            </div>
        </div>
    )
}

export default Hero