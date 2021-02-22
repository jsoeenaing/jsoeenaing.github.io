import {Jumbotron} from "react-bootstrap";
import {SubTitle, Title} from "./textstyles";
import backgroundImage from '../img/moonbackground.jpg';
import Navbar from './Navbar';
import React from "react";

export function Header() {
    return (
        <Jumbotron className={'text-center'}>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100%'
                    }}>
            <br/> <br/>
            <Title>J SOE NAING</Title>
            <br/>
            <SubTitle>CS Student at Simon Fraser University</SubTitle>
            <Navbar/>
            </div>
        </Jumbotron>
    );
}