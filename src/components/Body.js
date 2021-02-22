import {ContainerLink, ContainerText, ContainerTitle, Date} from "./textstyles";
import {Card} from "@material-ui/core";
import profileImage from '../img/profilepic1.png';
import React from "react";

export function Body() {
    return (
        <div className="container center">
            <div className="row">
                <div className="col-md-8">
                    <CustomContainer title={'About Me'}><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={profileImage} alt="profile-image"/><br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, my name is J Soe! I'm currently a third year computer science student at Simon Fraser University. I'm interested in Computer Science because I love the challenge that comes with creating something from nothing.
                    </CustomContainer>
                </div>

                <div className="col-md">
                    <CustomContainer title={'Contact Me'}><br/>
                    Email:
                        <a href="mailto:jnaing@sfu.ca"> jnaing@sfu.ca</a>
                        <br/>
                        <br/>
                    </CustomContainer>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <CustomContainer title={'Project Experience'}><br/>
                    <ContainerLink><a href="https://scratch.mit.edu/projects/392278500">Scratch Snorlax Project</a></ContainerLink>
                        <ul>
                            <li>Programmed a game called 'Hungry Snorlax' using Scratch, where users can move the character and collect as many fruits as possible to gain points, while avoiding certain fruits</li>
                        </ul>
                    </CustomContainer>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <CustomContainer title={'Work Experience'}><br/>
                            Tutor at Friends of Simon
                                <ul>
                                    <li>Assisted students in acquiring better understanding of targeted weak areas within a subject or a subject as a whole</li>
                                </ul>
                                <br/>
                      
                            Sale Associate at Eyestar Optical
                                <ul>
                                    <li>Dealt with customers' concerns and used appropriate judgment and problem solving</li>
                                </ul>
                    </CustomContainer>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <CustomContainer title={'Education'}><br/>
                        <p>BSc. Computing Science   <i>(September 2019 - Present)</i></p>
                            <ul>
                                <li>Simon Fraser University, Burnaby, British Columbia</li>
                            </ul>
                        
                        <p>BSc. Biological Science   <i>(September 2013 - December 2018)</i></p>
                            <ul>
                                <li>Simon Fraser University, Burnaby, British Columbia</li>
                            </ul>
                    </CustomContainer>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <CustomContainer title={'Programming Languages/ Applications'}><br/>
                        Languages:
                            <ul>
                                <li>C/C++</li>
                                <li>JavaScript</li>
                                <li>Matlab</li>
                                <li>Script</li>
                                <li>HTML</li>
                            </ul>

                        Applications:
                            <ul>
                                <li>Visual Studio</li>
                                <li>Github</li>
                                <li>Gitlab</li>
                                <li>Node.js</li>
                                <li>Bootstrap</li>
                                <li>Microsoft Office</li>
                            </ul>
                    </CustomContainer>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <CustomContainer title={'Courses'}><br/>
                        <div className="row">
                            <div className="col-md">
                                <ContainerLink>Programming</ContainerLink>
                                    <ul>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/summer/courses/cmpt/225.html">Data
                                            Structures and Programming</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/276.html">Introduction
                                            to Software Engineering</a></li>
                                        <li><a href="http://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/354.html">Database
                                            Systems</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/295.html">Introduction
                                            to Computer Systems</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/fall/courses/cmpt/320.html">Social Implications - Computerized Society</a></li>
                                    </ul>
                                </div>
                            <div className="col-md">
                                <ContainerLink>Mathematics</ContainerLink>
                                    <ul>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/summer/courses/math/150.html">Calculus
                                            I</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/math/232.html">Linear
                                            Algebra</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/101.html">Discrete
                                            Mathematics I</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/201.html">Discrete
                                            Mathematics II</a></li>
                                    </ul>
                                </div>
                            </div>
                        </CustomContainer>
                    </div>
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