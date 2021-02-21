import '../App.css';
import React from "react";

export function Title(props) {
    return <div className={'title'}>{props.children}</div>;
}

export function SubTitle(props) {
    return <div className={'subtitle'}>{props.children}</div>;
}
