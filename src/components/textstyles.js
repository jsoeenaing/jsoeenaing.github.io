import '../App.css';
import React from "react";

export function Title(props) {
    return <div className={'title'}>{props.children}</div>;
}

export function SubTitle(props) {
    return <div className={'subtitle'}>{props.children}</div>;
}

export function ContainerTitle(props) {
    return <div className={'containerTitle'}>{props.children}</div>;
}

export function ContainerText(props) {
    return <div className={'containerText'}>{props.children}</div>;
}

export function AboutMeContainerText(props) {
    return <div className={'aboutMeContainerText'}>{props.children}</div>;
}

export function ContainerLink(props) {
    return <span className={'containerLink'}>{props.children}</span>;
}