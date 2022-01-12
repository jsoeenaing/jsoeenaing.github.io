import {Jumbotron} from "react-bootstrap";
import {SubTitle, Title} from "./Textstyles";
import backgroundImage from '../img/aesthetic_background.jpg';
import Navbar from './Navbar';
import React from "react";

export function Header() {
    return (
        <div className={'text-center'}>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%'
                    }}>
            <br/><br/>
            <Title>J SOE NAING</Title>
            <br/>
            <SubTitle>Web Developer Intern | Computer Science Student</SubTitle>
            <Navbar/>
            <br/>
            </div>
        </div>
    );
}