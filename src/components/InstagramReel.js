import React from 'react'

const InstagramReel = ({images}) => {
    return(
        <div className="instagram-reel">
            <div className="container-fluid">
                <div>
                    <div className="instagram-title__container margin-bottom__m">
                        <p className="title">
                            Follow us on Instagram!
                        </p>
                    </div>
                    <div className="instgram-reel__images">
                        {
                        images.map((image) =>
                        <div className="image-container">
                            <img src={image} alt="Instagram Image"/>
                        </div>
                        )}
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default InstagramReel