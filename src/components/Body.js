import {ContainerLink, ContainerText, AboutMeContainerText, ContainerTitle} from "./Textstyles";
import {Card} from "@material-ui/core";
import profileImage from '../assets/images/profilepic2.png';
import React from "react";
import Row from 'react-bootstrap/Row'

export function Body() {
    return (
        <div className="container center">
            <div className="row">
                <FirstContainer title={'About Me'}><br/>
                    <AboutMeContainer>
                    <br/>
                        <img src={profileImage} alt="profile-image"/>
                        <br/><br/>
                        <b>Hello</b>
                        <br/>
                        I am a second degree Computer Science student possessing a bachelor’s degree in Biological Science. <br/>
                        I decided to pursue Computer Science because I was so appealed by the nature of building something from nothing. <br/>
                        Just like an artist with a paintbrush, a developer can create neat things using just time and a computer.. isn't that fascinating?! ㋛ <br/>
                        Aside coding, I enjoy playing the guitar, painting and exploring the outdoors. <br/>
                        <b><br/>Contact me: <a href="mailto:jsoe_06@hotmail.com">jsoe_06@hotmail.com</a><br/><br/></b>
                    </AboutMeContainer>
                </FirstContainer>
            </div>

            <div className="row">
                <AltContainer title={'Work Experience'}><br/>
                    <BoxContainer>
                    <b>Web Application Developer (Part-Time),</b> Fraser Health Authority<br/>
                        Apr 2022 - Present
                            <ul>
                                <li>Developing a ‘Leave Scheduler’ PowerApps application to be used by the whole System Optimization department </li>
                                <li>Ensuring a smooth operational experience for others using Azure DevOps as one of the DevOps admins</li>
                                <li>Maintaining good relations and excellent collaboration with team members</li>
                                <li>Working with SQL-based databases and ASP.NET MVC framework to develop new features in a health care web application called iTracke</li>
                            </ul>
                        <b>Web Application Developer Intern,</b> Fraser Health Authority<br/>
                        Sept 2021 - Apr 2022
                            <ul>
                                <li>Used Scrum project management methodology to organize projects, receive feedback and reflect for continuous improvement </li>
                                <li>Used Visual Studio IDE and ASP.NET MVC framework to build health care a web application called iTracker </li>
                                <li>Collaborated closely with other developers to develop features adhering to the requirements of clients </li>
                                <li>Tested and verified new or improved features and fixed existing bugs </li>
                                <li>Lead the hiring process and communicated closely with the manager and HR to hire for available web developer positions </li>
                            </ul>
                        <b>High School Tutor,</b> Simon Fraser University <br/>
                        Jan 2018 – Aug 2021
                            <ul>
                                <li>Worked with 3 other tutors to assist students in acquiring better understanding of targeted weak areas within a subject or a subject as a whole</li>
                                <li>Analyzed and maintained records of student's progress to teach individual needs</li>
                                <li>Implemented and ran literacy and numeracy activities for a group of up to 20 students</li>
                            </ul>
                    </BoxContainer>
                </AltContainer>
            </div>

            <div className="row">
                <CustomContainer title={'Hobbies (Artworks)'}><br/>
                    <BoxContainer2>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    </BoxContainer2>
                </CustomContainer>
            </div>

            <div className="row">
                <CustomContainer title={'Projects'}><br/>
                    <BoxContainerProject>
                        <b>Tom & Jerry Maze Game</b>
                        <ul>
                            <li>Programmed a maze game called Tom & Jerry in Java using OOP design concepts </li>
                            <li>Used a set of Swing components which allow for creation of a User Interface </li>
                            <li>Collaborated and communicated closely with a team of three other members </li>
                            <li>Designed the UML and mock-up of User Interface</li>
                        <li><ContainerLink><a href="https://github.com/jsoeenaing/Tom-Jerry-Maze-Game.git"><b>View Project Here</b></a></ContainerLink></li>
                        </ul>
                        <br/>
                        <b>2-Player Tic Tac Toe Game</b>
                        <ul>
                            <li>Implemented a simple Tic-Tac-Toe game in Python using PyCharm</li>
                            <li>Used multiple if-else rules to account for all possible test cases</li>
                            <li>Troubleshot game programming to ensure it builds and runs smoothly on an IDE</li>
                            <li><ContainerLink><a href="https://github.com/jsoeenaing/Tic-Tac-Toe.git"><b>View Project Here</b></a></ContainerLink></li>     
                        </ul>
                        <br/>
                        <b>Hungry Snorlax!</b>
                        <ul>
                            <li>Implemented a collecting game named Hungry Snorlax using a block-based visual programming Scratch language</li>
                            <li>Planned out an appealing visual theme to enhance the players' experience</li>
                            <li>Designed the main character, rewards and punishments using Paint.NET</li>
                        <li><ContainerLink><a href="https://scratch.mit.edu/projects/392278500"><b>View Project Here</b></a></ContainerLink></li>
                        </ul>
                    </BoxContainerProject>
                </CustomContainer>
            </div>

            <div className="row">
                <AltContainer title={'Education'}><br/>
                    <BoxContainer>
                        <b>Bachelor of Computing Science, </b> Simon Fraser University <br/>
                        September 2019 - December 2022 <br/> <br/>
                        <b>Bachelor of Biological Science, </b> Simon Fraser University <br/>
                        September 2013 - December 2018 <br/>
                    </BoxContainer>
                </AltContainer>
            </div>

            <div className="row">
                <CustomContainer title={'Programming Languages & Applications'}><br/>
                    <BoxContainer>
                        <b>Languages: &nbsp;</b>
                            Python,&nbsp;
                            Java,&nbsp;
                            C#,&nbsp;
                            MySQL,&nbsp; 
                            JavaScript,&nbsp;
                            HTML/CSS
                        <br/><br/>
                        <b>Applications:  &nbsp;</b>
                            Visual Studio,&nbsp;
                            IntelliJ,&nbsp;
                            PyCharm,&nbsp;
                            PowerApps
                    </BoxContainer>
                </CustomContainer>
            </div>

            <Row>
                <AltContainer title={'Courses'}><br/>
                    <BoxContainer>
                        <ContainerLink><b>Programming: &nbsp;</b></ContainerLink>
                            <a href="http://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/354.html">Database Systems</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2021/spring/courses/cmpt/300.html">Operating Systems I</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2021/spring/courses/cmpt/310.htmll">Artificial Intelligence Survey</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/summer/courses/cmpt/225.html">Data Structures and Programming</a>, &nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/276.html">Introduction to Software Engineering</a>
                        <br/><br/>
                        <ContainerLink><b>Mathematics: &nbsp;</b></ContainerLink>
                            <a href="https://www.sfu.ca/students/calendar/2021/summer/courses/math/154.html">Calculus I</a>,&nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2021/summer/courses/math/155.html">Calculus II</a>,&nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/math/232.html">Linear Algebra</a>,&nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/summer/courses/macm/316.html">Numerical Analysis</a>,&nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/101.html">Discrete Mathematics I</a>,&nbsp;&nbsp;
                            <a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/201.html">Discrete Mathematics II</a>
                    </BoxContainer>
                </AltContainer>
            </Row>
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

function AboutMeContainer(props) {
    return (
        <Card className={'aboutMeContainer'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <AboutMeContainerText>{props.children}</AboutMeContainerText>
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

function BoxContainer2(props) {
    return (
        <Card className={'boxContainer2'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}

function BoxContainerProject(props) {
    return (
        <Card className={'boxContainerProject'}>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerText>{props.children}</ContainerText>
        </Card>
    );
}