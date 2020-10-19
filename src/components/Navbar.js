import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiShoppingCartLine} from 'react-icons/ri'

const Navbar = ({image,announcement}) =>{
    const[isOpen, setIsOpen] = useState(false)

    const navLinks = [
        'Womens',
        'Mens',
        'Accessories',
        'Sale!'
    ]

    return (
        <React.Fragment>
            <div className={`mobile-dropdown ${isOpen ? "" : "hidden"}`}>
                <div className="dropdown-top">
                    <div className="nav-logo">
                        <a><img src={image} alt="Logo"/></a>
                    </div>
                </div>
                <div className="dropdown-links">
                    <ul className="column">
                        {navLinks.map((link,index) => (
                        <li key={index}>
                            <a>{link}</a>
                        </li>
                        ))}
                    </ul>
                </div>
                <a className="dropdown-bottom" onClick={() => setIsOpen(false)}>
                    Close
                </a>
            </div>
            <header>
                <div className="announcement-bar">
                    <div className="container-fluid">
                        <p>
                        {announcement}
                        </p>
                    </div>
                </div>
                <div className="header__nav-container">
                    <div className="container-fluid">
                        <div className="row center-row">
                            <div className="nav__desktop-container center-row">
                                <div className="nav-logo">
                                    <a><img src={image} alt="Logo"/></a>
                                </div>
                                <nav>
                                    <ul>
                                        {navLinks.map((link) => (
                                        <li className="nav-items">
                                        <a>{link}</a>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="row nav__mobile-container">
                            <nav className="nav__mobile-left" role="navigation">
                                <ul>
                                    <li className="mobile-menu-toggle">
                                        <a onClick={() => setIsOpen(!isOpen)}>
                                            
                                            <GiHamburgerMenu/>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="nav__mobile-center">
                                <div className="nav-logo">
                                    <a><img src={image} alt="Logo"/></a>
                                </div>
                            </div>
                            <nav className="nav__mobile-right" role="navigation">
                                <ul>
                                    <li>
                                        <a>
                                            <RiShoppingCartLine/>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Navbar