import React, {useState} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                {button && <Button buttonStyle='btn--outline'>Github</
                Button>}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {button && <Button buttonStyle='btn--outline'>Resume</
                Button>}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {button && <Button buttonStyle='btn--outline'>Linkedin</
                Button>}
            </div>
        </nav>
        </>
    );
}

export default Navbar;