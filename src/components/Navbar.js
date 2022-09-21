import React from 'react';
import {GoMarkGithub, GoPencil} from "react-icons/go";
import {GrLinkedin} from "react-icons/gr";
import {Button} from './Button';
import '../assets/styles/Navbar.css';

function Navbar() {
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <NavBarItem link={'https://github.com/jsoeenaing'}>
                <GoMarkGithub className={'navBarItemIcon'}/> &nbsp;
                    Github
                </NavBarItem>
                &nbsp;&nbsp;&nbsp;
                <NavBarItem link={'https://jsoeenaing.github.io/resume/'}>
                <GoPencil className={'navBarItemIcon'}/> &nbsp; 
                    Resume
                </NavBarItem>
                &nbsp;&nbsp;&nbsp;
                <NavBarItem link={'https://www.linkedin.com/in/jsoeenaing'}>
                    <GrLinkedin className={'navBarItemIcon'}/>&nbsp; 
                    LinkedIn
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