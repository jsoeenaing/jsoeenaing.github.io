import {ContainerLink, ContainerText, ContainerTitle} from "./textstyles";
import {Card} from "@material-ui/core";
import profileImage from '../img/profilepic2.png';
import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export function Body() {
    return (
        <div className="container center">
            <div className="row">
                <FirstContainer title={'About Me'}><br/>
                    <BoxContainer1>
                    <br/>
                        <img src={profileImage} alt="profile-image"/>
                        <br/><br/>
                        <b>Hello, my name is J Soe!</b> <br/>
                        I'm currently a third year computer science student at Simon Fraser University. <br/>
                        I got interested in Computer Science because I love the challenge that comes with creating something amazing out of nothing!<br/>
                        During spare time, I like to play RPG/strategy MOBA games, create acrylic and digital paintings and explore places I've never been before.
                        <b><br/><br/>Contact me: <a href="mailto:jnaing@sfu.ca"> jnaing@sfu.ca<br/><br/></a></b>
                    </BoxContainer1>
                </FirstContainer>
            </div>

            <div className="row">
                <AltContainer title={'Projects'}><br/>
                    <BoxContainer2>

                    <b>Tom & Jerry Maze Game</b>
                        <ul>
                            <li>Programmed a maze game called Tom & Jerry using IntelliJ </li>
                            <li>Used a set of Swing components which allow for creation of a User Interface</li>
                            <li>Collaborated and communicated closely with a team of three other members</li>
                            <li>Designed the UML and mock-up of User Interface</li>
                        <li><ContainerLink><a href="https://github.com/jsoeenaing/Tom-Jerry-Maze-Game.git"><b>View Project Here</b></a></ContainerLink></li>
                        </ul>
                    

                    <b>Tic-Tac-Toe</b>
                        <ul>
                            <li>Implemented a simple Tic-Tac-Toe game in Python using PyCharm</li>
                            <li>Used if-else rules to make the computer player intelligent and the game challenging</li>
                            <li>Troubleshot game programming to ensure it builds and runs smoothly on an IDE</li>
                        </ul>

                    <b>Hungry Snorlax!</b>
                        <ul>
                            <li>Implemented a collecting game named Hungry Snorlax using a block-based visual programming Scratch language</li>
                            <li>Planned out an appealing visual theme to enhance the players' experience</li>
                            <li>Designed the main character, rewards and punishments using Paint.NET</li>
                        <li><ContainerLink><a href="https://scratch.mit.edu/projects/392278500"><b>View Project Here</b></a></ContainerLink></li>
                        </ul>
                    </BoxContainer2>
                </AltContainer>
            </div>

            <div className="row">
                <CustomContainer title={'Work Experience'}><br/>
                    <BoxContainer3>
                        <b>Tutor at Friends of Simon </b>
                            <ul>
                                <li>Working with 3 other tutors to assist students in acquiring better understanding of targeted weak areas within a subject or a subject as a whole</li>
                                <li>Analyzing and maintaining records of student's progress to teach individual needs</li>
                                <li>Implementing and running literacy and numeracy activities for a group of up to 20 students</li>
                            </ul>
                    </BoxContainer3>
                    <br/>
                    <BoxContainer4>
                        <b>Sale Associate at Eyestar Optical</b>
                            <ul>
                                <li>Dealing with customers' concerns and using appropriate judgment to solve for any arising problems and issues</li>
                                <li>Entering new patient/customer profiles and prescriptions into online systems</li>
                                <li>Anticipating and responding to customer cues by consistently evaluating customers’ needs</li>
                            </ul>
                    </BoxContainer4>
                </CustomContainer>
            </div>

            <div className="row">
                <AltContainer title={'Education'}><br/>
                    <BoxContainer1>
                        <b>BSc. Computing Science at Simon Fraser University (September 2019 - Present)</b>
                        <br/>
                        <b>BSc. Biological Science at Simon Fraser University (September 2013 - December 2018)</b>
                    </BoxContainer1>
                </AltContainer>
            </div>

            <div className="row">
                <CustomContainer title={'Programming Languages & Applications'}><br/>
                    <BoxContainer1>
                        <b>Languages: &nbsp;</b>
                            C/C++,&nbsp;
                            Java,&nbsp;
                            JavaScript,&nbsp;
                            Python&nbsp;

                        </BoxContainer1>
                    <br/>
                    <BoxContainer1>
                        <b>Applications:  &nbsp;</b>
                            Visual Studio,&nbsp;
                            IntelliJ,&nbsp;
                            PyCharm,&nbsp;
                            Github,&nbsp;
                            Gitlab,&nbsp;
                            Node.js,&nbsp;
                            Bootstrap,&nbsp;
                            Microsoft Office
                    </BoxContainer1>
                </CustomContainer>
            </div>

            <Row>
                <AltContainer title={'Courses'}><br/>
                        <BoxContainer5>
                            <ContainerLink><b>Programming: &nbsp;</b></ContainerLink>
                            <a href="http://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/354.html">Database
                                 Systems</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2021/spring/courses/cmpt/300.html">Operating 
                                 Systems I</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2021/spring/courses/cmpt/310.htmll">Artificial 
                                Intelligence Survey</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/summer/courses/cmpt/225.html">Data
                                Structures and Programming</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/295.html">Introduction
                                to Computer Systems</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/276.html">Introduction
                                to Software Engineering</a>
                        </BoxContainer5>
                        <br/>
                        <BoxContainer6>
                            <ContainerLink><b>Mathematics: &nbsp;</b></ContainerLink>
                                <a href="https://www.sfu.ca/students/calendar/2021/summer/courses/math/154.html">Calculus
                                        I</a>,&nbsp;&nbsp;
                                 <a href="https://www.sfu.ca/students/calendar/2021/summer/courses/math/155.html">Calculus
                                        II</a>,&nbsp;&nbsp;
                                <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/math/232.html">Linear
                                        Algebra</a>,&nbsp;&nbsp;
                                <a href="https://www.sfu.ca/students/calendar/2020/summer/courses/macm/316.html">Numerical
                                        Analysis</a>,&nbsp;&nbsp;
                                <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/101.html">Discrete
                                        Mathematics I</a>,&nbsp;&nbsp;
                                <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/201.html">Discrete
                                        Mathematics II</a>
                        </BoxContainer6>
                </AltContainer>
                </Row>

                
            <div className="row">
                <CustomContainer title={'Hobbies (Artworks)'}><br/>
                    <BoxContainer7>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    </BoxContainer7>
                </CustomContainer>
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

function BoxContainer1(props) {
    return (
        <Card className={'boxContainer1'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}

function BoxContainer2(props) {
    return (
        <Card className={'boxContainer2'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}

function BoxContainer3(props) {
    return (
        <Card className={'boxContainer3'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}

function BoxContainer4(props) {
    return (
        <Card className={'boxContainer4'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}

function BoxContainer5(props) {
    return (
        <Card className={'boxContainer5'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}

function BoxContainer6(props) {
    return (
        <Card className={'boxContainer6'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}


function BoxContainer7(props) {
    return (
        <Card className={'boxContainer7'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}