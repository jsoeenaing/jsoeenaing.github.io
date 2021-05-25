import {Jumbotron} from "react-bootstrap";
import {SubTitle, Title} from "./textstyles";
import backgroundImage from '../img/headerbackground.jpg';
import Navbar from './Navbar';
import React from "react";

export function Header() {
    return (
        <div className={'text-center'}>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '150%'
                    }}>
            <br/><br/>
            <Title>J SOE NAING</Title>
            <br/>
            <SubTitle>CS Student at Simon Fraser University</SubTitle>
            <Navbar/>
            <br/>
            </div>
        </div>
    );
}