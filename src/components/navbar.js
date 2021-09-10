import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick= () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to ="/" className="navbar-logo" onClick={closeMobilMenu}>
                       Thomas Limmer 
                    </Link>    
                    <div className='menu-icon' onClick= {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to ='/home' className='nav-links' onClick={closeMobilMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/about-me' className='nav-links' onClick={closeMobilMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/portfolio' className='nav-links' onClick={closeMobilMenu}>
                                Work
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/contact' className='nav-links' onClick={closeMobilMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/resume' className='nav-links' onClick={closeMobilMenu}>
                                Resume
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
