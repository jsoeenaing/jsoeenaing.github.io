import React, {useState} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                {button && <Button buttonStyle='btn--outline'>Github</
                Button>}
                <span>
                {button && <Button buttonStyle='btn--outline'>Resume</
                Button>}
                </span>
                {button && <Button buttonStyle='btn--outline'>Linkedin</
                Button>}
            </div>
        </nav>
        </>
    );
}

export default Navbar;