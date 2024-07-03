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
                        I am a full-time web developer with dual degrees in Computer Science and Biological Science. My passion for Computer Science stemmed from the allure of creating something from nothing, much like an artist with a paintbrush. The ability to build and innovate using just time and a computer is truly fascinating to me.☺ 
                        <br/><br/>When I'm not working, you'll find me playing the guitar, painting, exploring the outdoors, or spending time with my lovely family, friends and puppy.<br/>
                        <b><br/>Contact me: <a href="mailto:jsoe_06@hotmail.com">jsoe_06@hotmail.com</a><br/><br/></b>
                    </AboutMeContainer>
                </FirstContainer>
            </div>

            <div className="row">
                <AltContainer title={'Work Experience'}><br/>
                    <BoxContainer>
                    <b>Developer (Full-Time),</b> Fraser Health Authority<br/>
                        May 2023 - Present
                            <ul>
                                <li>Leading the end-to-end implementation of a PowerApps application focused ontracking Patient Referrals to Mental Health programs leveraging the Power Platform,specifically Power Apps, Power Automate, Data Verse and Dataflow to architect andimplement a seamlessly integrated tracking system with best coding standards.</li>
                                <li>Collaborating with the executive director and senior directors to create an innovativePowerApps application for problem-solution matching, using an agile approach togather feedback and make iterative improvements.</li>
                                <li>Developing, enhancing and testing features within a patient tracking healthcare systemfor hospitals using SQL-based databases, C#, JavaScript, HTML, and CSS within theASP.Net MVC framework, directly contributing to system improvements.</li>
                                <li>Ensured smooth operations in Azure DevOps by adding new fields and managing accessand permissions.</li>
                            </ul>
                        <b>Developer (Co-op/Casual),</b> Fraser Health Authority<br/>
                        Sep 2021 - Apr 2023
                            <ul>
                                <li>Leveraged Agile methodology to drive continuous improvement and effectivelymanage project organization.</li>
                                <li>Ensured the reliability and functionality of new or enhanced features throughcomprehensive testing, promptly resolving bugs and issues.</li>
                                <li>Assisted in development of new features in a healthcare application using VisualStudio IDE and ASP.NET MVC framework, delivering effective solutions to addresscritical industry requirements.</li>
                                <li>Cultivated strong relationships and fostered exceptional collaboration among teammembers.</li>
                            </ul>
                        <b>High School Tutor,</b> Simon Fraser University <br/>
                        Jan 2018 – Aug 2021
                            <ul>
                                <li>Collaborated closely with a team of three tutors to provide comprehensive support tostudents, helping them gain a deeper understanding of targeted weak areas withinspecific subjects or the subject as a whole.</li>
                                <li>Took charge of planning and orchestrating engaging literacy and numeracy activitiesfor a group of up to 20 students, fostering their academic growth and inspiringstudents to learn.</li>
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
                        <i>Dean's Honor Roll List, 2018</i>
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