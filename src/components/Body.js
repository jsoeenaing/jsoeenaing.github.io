import {ContainerLink, ContainerText, ContainerTitle} from "./textstyles";
import {Card} from "@material-ui/core";
import profileImage from '../img/profilepic1.png';
import React from "react";

export function Body() {
    return (
        <div className="container center">
            <div className="row">
                    <FirstContainer title={'About Me'}><br/>
                    <PicContainer>
                        <img src={profileImage} alt="profile-image"/><br/><br/>
                    </PicContainer>
                        <BoxContainer>
                        Hello, my name is J Soe! I'm currently a third year computer science student at Simon Fraser University. 
                        <br/>I got interested in Computer Science because I love the challenge that comes with creating something from nothing!
                        During spare time, I like to explore new places, try new foods and discover new cultures.
                        <br/><br/>Contact me: <a href="mailto:jnaing@sfu.ca"> jnaing@sfu.ca</a>
                        </BoxContainer>
                    </FirstContainer>
            </div>

            <div className="row">
                    <AltContainer title={'Project Experience'}><br/>
                    <BoxContainer>
                    Hungry Snorlax Game!
                        <ul>
                            <li>Programmed a game called 'Hungry Snorlax' using Scratch, where users can move the character and collect as many fruits as possible to gain points, while avoiding certain fruits</li>
                        <li><ContainerLink><a href="https://scratch.mit.edu/projects/392278500">View Project Here</a></ContainerLink></li>
                        </ul>
                        </BoxContainer>
                    </AltContainer>
            </div>

            <div className="row">
                    <CustomContainer title={'Work Experience'}><br/>
                        <BoxContainer>
                            Tutor at Friends of Simon
                                <ul>
                                    <li>Assisted students in acquiring better understanding of targeted weak areas within a subject or a subject as a whole</li>
                                </ul>
                        </BoxContainer>

                        <BoxContainer>
                            Sale Associate at Eyestar Optical
                                <ul>
                                    <li>Dealt with customers' concerns and used appropriate judgment and problem solving</li>
                                </ul>
                            </BoxContainer>
                    </CustomContainer>
            </div>

            <div className="row">
                    <AltContainer title={'Education'}><br/>
                        <BoxContainer>
                            <p>BSc. Computing Science   <i>(September 2019 - Present)</i></p>
                                <ul>
                                    <li>Simon Fraser University, Burnaby, British Columbia</li>
                                </ul>
                        </BoxContainer>
                        <BoxContainer>
                            <p>BSc. Biological Science   <i>(September 2013 - December 2018)</i></p>
                                <ul>
                                    <li>Simon Fraser University, Burnaby, British Columbia</li>
                                </ul>
                        </BoxContainer>
                    </AltContainer>
            </div>

            <div className="row">
                    <CustomContainer title={'Programming Languages/ Applications'}><br/>
                    <BoxContainer>
                        Languages:
                            <ul>
                                <li>C/C++</li>
                                <li>JavaScript</li>
                                <li>Matlab</li>
                                <li>Script</li>
                                <li>HTML</li>
                            </ul>
                            </BoxContainer>

                        <BoxContainer>
                            Applications:
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
                                <ContainerLink>Programming</ContainerLink>
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

                        <BoxContainer>
                                <ContainerLink>Mathematics</ContainerLink>
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
            <br/>
        </Card>
    );
}

function PicContainer(props) {
    return (
        <Card className={'picContainer'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
            <br/>
        </Card>
    );
}