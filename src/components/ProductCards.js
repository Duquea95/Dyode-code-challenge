import React from 'react'

const ProductCards = ({mobileImages, desktopImages}) => {

    // let desktopImages = []
    // let mobileImages = []

    // const filterImages = () =>{
    //     images.reduce(img => {
    //         console.log(img)
    //         if (img.src != images[images.length - 1].src) {
    //             mobileImages.push(img.src)
    //         }
    //         mobileImages.push(img)
    //     })
    // }

    // filterImages();
    // console.log(mobileImages);

    return(
        <div className="product-cards__container">
            <div className="mobile-cards">
                {/* mobileImages.map((image) => */}
                <div className="mobile-cards__top">
                    <div className="product-card">
                        <div>
                            <picture className="product-card__image">
                                <img src={mobileImages[0].src} alt={`${mobileImages[0].name}-Products`}/>
                            </picture>
                        </div>
                        <div className="product-card__button-container">
                            <div className="">
                                <div className="product-card__button">
                                    <a className="product-card__text">{mobileImages[0].name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div>
                            <picture className="product-card__image">
                                <img src={mobileImages[1].src} alt={`${mobileImages[1].name}-Products`}/>
                            </picture>
                        </div>
                        <div className="product-card__button-container">
                            <div className="">
                                <div className="product-card__button">
                                    <a className="product-card__text">{mobileImages[1].name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-cards__bottom">
                    <div className="product-card">
                        <div>
                            <picture className="product-card__image">
                                <img src={mobileImages[2].src} alt={`${mobileImages[2].name}-Products`}/>
                            </picture>
                        </div>
                        <div className="product-card__button-container">
                            <div className="">
                                <div className="product-card__button">
                                    <a className="product-card__text">{mobileImages[2].name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>
            <div className="desktop-cards">
                {
                    desktopImages.map((image) =>
                    <div className="product-card">
                        <div>
                            <picture className="product-card__image">
                                <img src={image.src} alt={`${image.name}-Products`}/>
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
        </div>
    )
}

export default ProductCards;