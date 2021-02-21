import {Jumbotron} from "react-bootstrap";
import {SubTitle, Title} from "./textstyles";
import React from "react";

export function Header() {
    return (
        <Jumbotron className={'text-center'}>
            <br/>
            <Title>J Soe Naing</Title>
            <br/>
            <SubTitle>Computer Science Student at Simon Fraser University</SubTitle>
        </Jumbotron>
    );
}