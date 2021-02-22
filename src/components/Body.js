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
                      <img src={profileImage} alt="profile-image"/><br/><br/>
                    Hello, my name is J Soe! I'm currently a third year compter science student at Simon Fraser University. I'm interested in Computer Science because I love the challenge that comes with creating something from nothing.
                    </CustomContainer>
                </div>
                <div className="col-md">
                    <CustomContainer title={'Contact Me'}><br/>
                    &nbsp;
                        <a href="mailto:jnaing@sfu.ca">jnaing@sfu.ca</a>
                        <br/>
                        <br/>
                        <br/>
                    </CustomContainer>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <CustomContainer title={'Technical Experience'}><br/>
                        <ContainerLink><a href="https://scratch.mit.edu/projects/392278500">Scratch Snorlax Project</a></ContainerLink> <Date>(Jan 2021 - April 2021)</Date>
                        <ul>
                            <li>Created a Snorlax project using Scratch.</li>
                        </ul>
                    </CustomContainer>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <CustomContainer title={'Languages'}><br/>
                        C/C++, Python, JavaScript, Java, Script
                    </CustomContainer>
                </div>
                <div className="col-md-6">
                    <CustomContainer title={'Tools / Libraries'}><br/>
                        Git, React, Node.js, Bootstrap, SQL
                    </CustomContainer>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <CustomContainer title={'Education'}><br/>
                        <p>BSc. Computer Science   <i>(Sept 2019 - Current)</i></p>
                        <i>Simon Fraser University, Burnaby, British Columbia</i>
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