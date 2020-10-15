import React, {useState} from 'react'

const Footer = ({images, EmailIcon}) => {
    const[isOpen, setIsOpen] = useState(false)
    const[isOpen2, setIsOpen2] = useState(false)

    const customerServiceLinks = [
        "Accessibility",
        "Contact Us",
        "Return Policy",
        "FAQ",
        "Gift Certificates",
        "Wishlist"
    ]
    const companyLinks = [
        "About Us",
        "Careers",
        "Press",
        "Affiliates"
    ]

    return(
        <footer>
            <div>
                <div className="footer__email-container">
                    <div className="margin-bottom__m container-fluid">
                        <div className="title-container">
                            <div>
                                <img className="email-icon" src={EmailIcon} alt="Email Icon"/>
                            </div>
                            <div className="margin-bottom__m">
                                <p className="title signup-form__title">
                                    Sign up & stay Connected
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="email-container__bottom container-fluid">
                        <div className="email-container__bottom-left">
                            <div>
                                <div className="margin-bottom__l">
                                    <p className="signup-form__copy">
                                        Sign up for the newsletter and get 20% off! Get access to exclusive offers and be the first to know when new stuff drops.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="email-container__bottom-right">
                            <div className="email__form-container">
                                <div className="margin-bottom__s">
                                    <form className="signup-form">
                                        <input className="email-input" type="text" placeholder="Your Email Address" name="email"/>
                                        <button className="form-submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__nav-container">
                    <div className="container-fluid nav-container__inner">
                        <div>
                            <div className="linkList-container">
                                <div className="row" onClick={() => setIsOpen(!isOpen)}>
                                    <div className="linkList__title-container">
                                        <p className="linkList-title">Customer Service</p>
                                    </div>
                                    <div className="linkList__right">
                                        <p className="linkList-title">
                                            {isOpen ? '-' : '+'}
                                        </p>
                                    </div>
                                </div>
                                <div className="linkList">
                                    <ul>
                                        {customerServiceLinks.map((link) =>
                                            <li><a className="linkList-link">{link}</a></li>
                                        )}
                                    </ul>
                                </div>
                                {isOpen  &&
                                <div className="linkList-dropdown">
                                    <ul>
                                        {customerServiceLinks.map((link) =>
                                            <li><a className="linkList-link">{link}</a></li>
                                        )}
                                    </ul>
                                </div>
                                }
                            </div>
                            <div className="linkList-container">
                                <div className="row" onClick={()=>setIsOpen2(!isOpen2)}>
                                    <div className="linkList__title-container">
                                        <p className="linkList-title">Company</p>
                                    </div>
                                    <div className="linkList__right">
                                        <p className="linkList-title">
                                            {isOpen2 ? '-' : '+'}
                                        </p>
                                    </div>
                                </div>
                                <div className="linkList">
                                    <ul>
                                        {customerServiceLinks.map((link) =>
                                            <li><a className="linkList-link">{link}</a></li>
                                        )}
                                    </ul>
                                </div>
                                {isOpen2  &&
                                <div className="linkList-dropdown">
                                    <ul>
                                        {companyLinks.map((link) =>
                                            <li><a className="linkList-link">{link}</a></li>
                                        )}
                                    </ul>
                                </div>
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="social-title__container">
                                    <p className="social-title">Follow Us</p>
                                </div>
                                <div>
                                    <ul className="social">
                                        {images.map((image) =>
                                        <li><a><img src={image}/></a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer