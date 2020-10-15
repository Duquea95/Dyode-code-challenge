import React from 'react'

const ProductCards = ({images}) => {

    // function ProductTrio = () =>{
    //     return(

    //     )
    // }
    
    return(
        <div className="product-cards__container">
            {
                images.map((image) =>
                <div className="product-card">
                    <div>
                        <picture className="product-card__image">
                            <img src={image.image} alt={`${image.name}-Products`}/>
                        </picture>
                    </div>
                    <div className="product-card__button-container">
                        <div className="">
                            <div className="product-card__button">
                                <a className="product-card__text">{image.name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductCards;