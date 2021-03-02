import {ContainerLink, ContainerText, ContainerTitle} from "./textstyles";
import {Card} from "@material-ui/core";
import profileImage from '../img/ppic.png';
import React from "react";

export function Body() {
    return (
        <div className="container center">
            <div className="row">
                <FirstContainer title={'About Me'}><br/>
                    <BoxContainer>
                    <br/>
                        <img src={profileImage} alt="profile-image"/>
                        <br/><br/>
                        <b>Hello, my name is J Soe!</b> <br/>
                        I'm currently a third year computer science student at Simon Fraser University. 
                        I got interested in Computer Science because I love the challenge that comes with creating something out of nothing!
                        During spare time, I like to explore new places, try new foods and discover new cultures.
                        <b><br/><br/>Contact me: <a href="mailto:jnaing@sfu.ca"> jnaing@sfu.ca<br/><br/></a></b>
                    </BoxContainer>
                </FirstContainer>
            </div>

            <div className="row">
                <AltContainer title={'Projects'}><br/>
                    <BoxContainer>
                    <b>Hungry Snorlax!</b>
                        <ul>
                            <li>Programmed a game called 'Hungry Snorlax' using Scratch, where users can move the character and collect as many fruits as possible to gain points, while avoiding certain fruits<i></i></li>
                        <li><ContainerLink><a href="https://scratch.mit.edu/projects/392278500"><b>View Project Here</b></a></ContainerLink></li>
                        </ul>
                    </BoxContainer>
                </AltContainer>
            </div>

            <div className="row">
                <CustomContainer title={'Work Experience'}><br/>
                    <BoxContainer>
                        <b>Tutor at Friends of Simon </b>
                            <ul>
                                <li>Assisted students in acquiring better understanding of targeted weak areas within a subject or a subject as a whole</li>
                            </ul>
                    </BoxContainer>
                    <br/>
                    <BoxContainer>
                        <b>Sale Associate at Eyestar Optical</b>
                            <ul>
                                <li>Dealt with customers' concerns and used appropriate judgment and problem solving</li>
                            </ul>
                    </BoxContainer>
                </CustomContainer>
            </div>

            <div className="row">
                <AltContainer title={'Education'}><br/>
                    <BoxContainer>
                        <b>BSc. Computing Science (September 2019 - Present)</b>
                            <ul>
                                <li>Simon Fraser University, Burnaby, British Columbia</li>
                            </ul>
                    </BoxContainer>
                    <br/>
                    <BoxContainer>
                        <b>BSc. Biological Science (September 2013 - December 2018)</b>
                            <ul>
                                <li>Simon Fraser University, Burnaby, British Columbia</li>
                            </ul>
                    </BoxContainer>
                </AltContainer>
            </div>

            <div className="row">
                <CustomContainer title={'Programming Languages & Applications'}><br/>
                        <BoxContainer>
                            <b>Languages:</b>
                            <ul>
                                <li>C/C++</li>
                                <li>JavaScript</li>
                                <li>Matlab</li>
                                <li>Script</li>
                                <li>HTML</li>
                            </ul>
                        </BoxContainer>
                    <br/>
                    <BoxContainer>
                        <b>Applications:</b>
                            <ul>
                                <li>Visual Studio</li>
                                <li>Github</li>
                                <li>Gitlab</li>
                                <li>Node.js</li>
                                <li>Bootstrap</li>
                                <li>Microsoft Office</li>
                            </ul>
                    </BoxContainer>
                </CustomContainer>
            </div>

            <div className="row">
                <AltContainer title={'Courses'}><br/>
                    <div className="row">
                        <BoxContainer>
                            <ContainerLink><b>Programming</b></ContainerLink>
                                <ul>
                                    <li><a href="http://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/354.html">Database
                                        Systems</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2021/spring/courses/cmpt/300.html">Operating 
                                        Systems I</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2021/spring/courses/cmpt/310.htmll">Artificial 
                                        Intelligence Survey</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/summer/courses/cmpt/225.html">Data
                                        Structures and Programming</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/295.html">Introduction
                                        to Computer Systems</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/fall/courses/cmpt/361.html">Introduction to 
                                        Computer Graphics</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/276.html">Introduction
                                        to Software Engineering</a></li>
                                </ul>
                        </BoxContainer>
                        <br/>
                        <BoxContainer>
                            <ContainerLink><b>Mathematics</b></ContainerLink>
                                <ul>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/summer/courses/math/150.html">Calculus
                                        I</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/math/232.html">Linear
                                        Algebra</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/summer/courses/macm/316.html">Numerical
                                        Analysis</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/101.html">Discrete
                                        Mathematics I</a></li>
                                    <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/201.html">Discrete
                                        Mathematics II</a></li>
                                </ul>
                        </BoxContainer>
                    </div>
                </AltContainer>
            </div>
        </div>
    );
}

function CustomContainer(props) {
    return (
        <Card className={'customContainer'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
            <br/>
        </Card>
    );
}

function AltContainer(props) {
    return (
        <Card className={'altContainer'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
            <br/>
        </Card>
    );
}

function FirstContainer(props) {
    return (
        <Card className={'firstContainer'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
            <br/>
        </Card>
    );
}

function BoxContainer(props) {
    return (
        <Card className={'boxContainer'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}
