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
                <NavBarItem link={'https://github.com/jsoeenaing'}>
                    Github
                </NavBarItem>
                &nbsp;&nbsp;&nbsp;
                <NavBarItem link={'https://jsoeenaing.github.io/resume/'}>
                    Resume
                </NavBarItem>
                &nbsp;&nbsp;&nbsp;
                <NavBarItem link={'https://www.linkedin.com/in/jsoeenaing'}>
                    Linkedin
                </NavBarItem>
            </div>
        </nav>
        </>
    );
}

function NavBarItem(props) {
    return (
        <div className={'navBarItemSpacing'}>
            <a href={props.link}>
            <Button buttonStyle='btn--outline'>
                    {props.children}
                </Button>
            </a>
        </div>
    );
}

export default Navbar;