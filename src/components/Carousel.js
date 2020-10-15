import React from 'react'

const Carousel = ({image, arrows}) => {
    const productSlides = [
        {  
            id: 0,
            name: "Product Title",
            type: "Women's T-Shirt",
            price: 19.99
        },
        {
            id: 1,
            name: "Product Title",
            type: "Women's T-Shirt",
            price: 19.99
        },
        {
            id: 2,
            name: "Product Title",
            type: "Women's T-Shirt",
            price: 19.99
        },
        {
            id: 3,
            name: "Product Title",
            type: "Women's T-Shirt",
            price: 19.99
        }
    ]
    return(
        <div className="carousel">
            <div className="container-fluid relative">
                <div className="carousel-title__container margin-bottom__m">
                    <p className="title">
                        New Arrivals
                    </p>
                </div>
                <div className="carousel-items row">
                    {productSlides.map((index) => 
                    <a href="#">
                        <div key={index.id} className="carousel-item">
                            <div className="item-image margin-bottom__l">
                                <img src={image} alt="Instagram Image"/>
                            </div>
                            <div className="item-name">
                                <p>{index.name}</p>
                            </div>
                            <div className="item-type">
                                <p>{index.type}</p>
                            </div>
                            <div className="item-price">
                                <p>${index.price}</p>
                            </div>
                        </div>
                    </a>
                    )}
                </div>
                {arrows.map((arrow) =>
                <a className="arrow">
                    <img src={arrow}/>
                </a>
                )}
            </div>
        </div>
    )
}

export default Carousel