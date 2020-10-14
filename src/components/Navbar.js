import React, {useState} from 'react';

const Navbar = () =>{
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
          <ul>
            {navLinks.map((link) => (
              <li>
                <a>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <header>
          <div className="container-fluid">
            <div className="row center-row">
                <div className="nav__desktop-container center-row">
                    <div className="nav-logo">
                        <a>Logo</a>
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
                      <i>-</i>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="nav__mobile-center">
                <div>
                  <a>Logo</a>
                </div>
              </div>
              <nav className="nav__mobile-right" role="navigation">
                <ul>
                  <li>
                    <a>
                      <i>cart</i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
}

export default Navbar