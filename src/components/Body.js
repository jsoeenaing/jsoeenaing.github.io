import {ContainerLink, ContainerText, ContainerTitle} from "./textstyles";
import {Card} from "@material-ui/core";
import profileImage from '../img/profilepic1.png';
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
                    𝙃𝙚𝙡𝙡𝙤, 𝙢𝙮 𝙣𝙖𝙢𝙚 𝙞𝙨 𝙅 𝙎𝙤𝙚! <br/>
                        
𝘐'𝘮 𝘤𝘶𝘳𝘳𝘦𝘯𝘵𝘭𝘺 𝘢 𝘵𝘩𝘪𝘳𝘥 𝘺𝘦𝘢𝘳 𝘤𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘴𝘤𝘪𝘦𝘯𝘤𝘦 𝘴𝘵𝘶𝘥𝘦𝘯𝘵 𝘢𝘵 𝘚𝘪𝘮𝘰𝘯 𝘍𝘳𝘢𝘴𝘦𝘳 𝘜𝘯𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘺. 𝘐 𝘨𝘰𝘵 𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵𝘦𝘥 𝘪𝘯 𝘊𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘚𝘤𝘪𝘦𝘯𝘤𝘦 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘐 𝘭𝘰𝘷𝘦 𝘵𝘩𝘦 𝘤𝘩𝘢𝘭𝘭𝘦𝘯𝘨𝘦 𝘵𝘩𝘢𝘵 𝘤𝘰𝘮𝘦𝘴 𝘸𝘪𝘵𝘩 𝘤𝘳𝘦𝘢𝘵𝘪𝘯𝘨 𝘴𝘰𝘮𝘦𝘵𝘩𝘪𝘯𝘨 𝘰𝘶𝘵 𝘰𝘧 𝘯𝘰𝘵𝘩𝘪𝘯𝘨. 
𝘋𝘶𝘳𝘪𝘯𝘨 𝘴𝘱𝘢𝘳𝘦 𝘵𝘪𝘮𝘦, 𝘐 𝘭𝘪𝘬𝘦 𝘵𝘰 𝘦𝘹𝘱𝘭𝘰𝘳𝘦 𝘯𝘦𝘸 𝘱𝘭𝘢𝘤𝘦𝘴, 𝘵𝘳𝘺 𝘯𝘦𝘸 𝘧𝘰𝘰𝘥𝘴 𝘢𝘯𝘥 𝘥𝘪𝘴𝘤𝘰𝘷𝘦𝘳 𝘯𝘦𝘸 𝘤𝘶𝘭𝘵𝘶𝘳𝘦𝘴.

                        <br/><br/>𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙢𝙚: <a href="mailto:jnaing@sfu.ca"> 𝘫𝘯𝘢𝘪𝘯𝘨@𝘴𝘧𝘶.𝘤𝘢</a>
                        </BoxContainer>
                    </FirstContainer>
            </div>

            <div className="row">
                    <AltContainer title={'Projects'}><br/>
                    <BoxContainer>
                    <p>𝙃𝙪𝙣𝙜𝙧𝙮 𝙎𝙣𝙤𝙧𝙡𝙖𝙭 𝙂𝙖𝙢𝙚</p>
                        <ul>
                            <li>𝘗𝘳𝘰𝘨𝘳𝘢𝘮𝘮𝘦𝘥 𝘢 𝘨𝘢𝘮𝘦 𝘤𝘢𝘭𝘭𝘦𝘥 '𝘏𝘶𝘯𝘨𝘳𝘺 𝘚𝘯𝘰𝘳𝘭𝘢𝘹' 𝘶𝘴𝘪𝘯𝘨 𝘚𝘤𝘳𝘢𝘵𝘤𝘩, 𝘸𝘩𝘦𝘳𝘦 𝘶𝘴𝘦𝘳𝘴 𝘤𝘢𝘯 𝘮𝘰𝘷𝘦 𝘵𝘩𝘦 𝘤𝘩𝘢𝘳𝘢𝘤𝘵𝘦𝘳 𝘢𝘯𝘥 𝘤𝘰𝘭𝘭𝘦𝘤𝘵 𝘢𝘴 𝘮𝘢𝘯𝘺 𝘧𝘳𝘶𝘪𝘵𝘴 𝘢𝘴 𝘱𝘰𝘴𝘴𝘪𝘣𝘭𝘦 𝘵𝘰 𝘨𝘢𝘪𝘯 𝘱𝘰𝘪𝘯𝘵𝘴, 𝘸𝘩𝘪𝘭𝘦 𝘢𝘷𝘰𝘪𝘥𝘪𝘯𝘨 𝘤𝘦𝘳𝘵𝘢𝘪𝘯 𝘧𝘳𝘶𝘪𝘵𝘴
</li>
                        <li><ContainerLink><a href="https://scratch.mit.edu/projects/392278500">𝙑𝙞𝙚𝙬 𝙋𝙧𝙤𝙟𝙚𝙘𝙩 𝙃𝙚𝙧𝙚</a></ContainerLink></li>
                        </ul>
                        </BoxContainer>
                    </AltContainer>
            </div>

            <div className="row">
                    <CustomContainer title={'Work Experience'}><br/>
                        <BoxContainer>
                       <p>𝙏𝙪𝙩𝙤𝙧 𝙖𝙩 𝙁𝙧𝙞𝙚𝙣𝙙𝙨 𝙤𝙛 𝙎𝙞𝙢𝙤𝙣</p>
                                <ul>
                                    <li>𝘈𝘴𝘴𝘪𝘴𝘵𝘦𝘥 𝘴𝘵𝘶𝘥𝘦𝘯𝘵𝘴 𝘪𝘯 𝘢𝘤𝘲𝘶𝘪𝘳𝘪𝘯𝘨 𝘣𝘦𝘵𝘵𝘦𝘳 𝘶𝘯𝘥𝘦𝘳𝘴𝘵𝘢𝘯𝘥𝘪𝘯𝘨 𝘰𝘧 𝘵𝘢𝘳𝘨𝘦𝘵𝘦𝘥 𝘸𝘦𝘢𝘬 𝘢𝘳𝘦𝘢𝘴 𝘸𝘪𝘵𝘩𝘪𝘯 𝘢 𝘴𝘶𝘣𝘫𝘦𝘤𝘵 𝘰𝘳 𝘢 𝘴𝘶𝘣𝘫𝘦𝘤𝘵 𝘢𝘴 𝘢 𝘸𝘩𝘰𝘭𝘦</li>
                                </ul>
                        </BoxContainer>
                        <br/>
                        <BoxContainer>
                        <p>𝙎𝙖𝙡𝙚 𝘼𝙨𝙨𝙤𝙘𝙞𝙖𝙩𝙚 𝙖𝙩 𝙀𝙮𝙚𝙨𝙩𝙖𝙧 𝙊𝙥𝙩𝙞𝙘𝙖𝙡</p>
                                <ul>
                                    <li>𝘋𝘦𝘢𝘭𝘵 𝘸𝘪𝘵𝘩 𝘤𝘶𝘴𝘵𝘰𝘮𝘦𝘳𝘴' 𝘤𝘰𝘯𝘤𝘦𝘳𝘯𝘴 𝘢𝘯𝘥 𝘶𝘴𝘦𝘥 𝘢𝘱𝘱𝘳𝘰𝘱𝘳𝘪𝘢𝘵𝘦 𝘫𝘶𝘥𝘨𝘮𝘦𝘯𝘵 𝘢𝘯𝘥 𝘱𝘳𝘰𝘣𝘭𝘦𝘮 𝘴𝘰𝘭𝘷𝘪𝘯𝘨</li>
                                </ul>
                            </BoxContainer>
                    </CustomContainer>
            </div>

            <div className="row">
                    <AltContainer title={'Education'}><br/>
                        <BoxContainer>
                            <p>𝘽𝙎𝙘. 𝘾𝙤𝙢𝙥𝙪𝙩𝙞𝙣𝙜 𝙎𝙘𝙞𝙚𝙣𝙘𝙚  (𝙎𝙚𝙥𝙩𝙚𝙢𝙗𝙚𝙧 <b>2019</b> - 𝙥𝙧𝙚𝙨𝙚𝙣𝙩)</p>
                                <ul>
                                    <li>𝘚𝘪𝘮𝘰𝘯 𝘍𝘳𝘢𝘴𝘦𝘳 𝘜𝘯𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘺, 𝘉𝘶𝘳𝘯𝘢𝘣𝘺, 𝘉𝘳𝘪𝘵𝘪𝘴𝘩 𝘊𝘰𝘭𝘶𝘮𝘣𝘪𝘢</li>
                                </ul>
                        </BoxContainer>
                        <br/>
                        <BoxContainer>
                            <p>𝘽𝙎𝙘. 𝘽𝙞𝙤𝙡𝙤𝙜𝙞𝙘𝙖𝙡 𝙎𝙘𝙞𝙚𝙣𝙘𝙚 (𝙎𝙚𝙥𝙩𝙚𝙢𝙗𝙚𝙧 <b>2013</b> - 𝘿𝙚𝙘𝙚𝙢𝙗𝙚𝙧 <b>2018</b>)</p>
                                <ul>
                                    <li>𝘚𝘪𝘮𝘰𝘯 𝘍𝘳𝘢𝘴𝘦𝘳 𝘜𝘯𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘺, 𝘉𝘶𝘳𝘯𝘢𝘣𝘺, 𝘉𝘳𝘪𝘵𝘪𝘴𝘩 𝘊𝘰𝘭𝘶𝘮𝘣𝘪𝘢</li>
                                </ul>
                        </BoxContainer>
                    </AltContainer>
            </div>

            <div className="row">
                    <CustomContainer title={'Programming Languages & Applications'}><br/>
                    <BoxContainer>
                    <p>𝙇𝙖𝙣𝙜𝙪𝙖𝙜𝙚𝙨:</p>
                            <ul>
                                <li>𝘊/𝘊++</li>
                                <li>𝘑𝘢𝘷𝘢𝘚𝘤𝘳𝘪𝘱𝘵</li>
                                <li>𝘔𝘢𝘵𝘭𝘢𝘣</li>
                                <li>𝘚𝘤𝘳𝘪𝘱𝘵</li>
                                <li>𝘏𝘛𝘔𝘓</li>
                            </ul>
                            </BoxContainer>
                            <br/>
                        <BoxContainer>
                        <p>𝘼𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨:</p>
                            <ul>
                                <li>𝘝𝘪𝘴𝘶𝘢𝘭 𝘚𝘵𝘶𝘥𝘪𝘰</li>
                                <li>𝘎𝘪𝘵𝘩𝘶𝘣</li>
                                <li>𝘎𝘪𝘵𝘭𝘢𝘣</li>
                                <li>𝘕𝘰𝘥𝘦.𝘫𝘴</li>
                                <li>𝘉𝘰𝘰𝘵𝘴𝘵𝘳𝘢𝘱</li>
                                <li>𝘔𝘪𝘤𝘳𝘰𝘴𝘰𝘧𝘵 𝘖𝘧𝘧𝘪𝘤𝘦</li>
                            </ul>
                        </BoxContainer>
                    </CustomContainer>
            </div>

            <div className="row">
                    <AltContainer title={'Courses'}><br/>
                        <div className="row">
                        <BoxContainer>
                                <ContainerLink><p>𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙞𝙣𝙜</p></ContainerLink>
                                    <ul>
                                        
                                        <li><a href="http://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/354.html">𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘚𝘺𝘴𝘵𝘦𝘮𝘴</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2021/spring/courses/cmpt/300.html">𝘖𝘱𝘦𝘳𝘢𝘵𝘪𝘯𝘨 𝘚𝘺𝘴𝘵𝘦𝘮𝘴 𝘐</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2021/spring/courses/cmpt/310.htmll">𝘈𝘳𝘵𝘪𝘧𝘪𝘤𝘪𝘢𝘭 𝘐𝘯𝘵𝘦𝘭𝘭𝘪𝘨𝘦𝘯𝘤𝘦 𝘚𝘶𝘳𝘷𝘦𝘺</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/summer/courses/cmpt/225.html">𝘋𝘢𝘵𝘢 𝘚𝘵𝘳𝘶𝘤𝘵𝘶𝘳𝘦𝘴 𝘢𝘯𝘥 𝘗𝘳𝘰𝘨𝘳𝘢𝘮𝘮𝘪𝘯𝘨</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/295.html">𝘐𝘯𝘵𝘳𝘰𝘥𝘶𝘤𝘵𝘪𝘰𝘯 𝘵𝘰 𝘊𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘚𝘺𝘴𝘵𝘦𝘮𝘴</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/fall/courses/cmpt/361.html">𝘐𝘯𝘵𝘳𝘰𝘥𝘶𝘤𝘵𝘪𝘰𝘯 𝘵𝘰 𝘊𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘎𝘳𝘢𝘱𝘩𝘪𝘤𝘴</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/cmpt/276.html">𝘐𝘯𝘵𝘳𝘰𝘥𝘶𝘤𝘵𝘪𝘰𝘯 𝘵𝘰 𝘚𝘰𝘧𝘵𝘸𝘢𝘳𝘦 𝘌𝘯𝘨𝘪𝘯𝘦𝘦𝘳𝘪𝘯𝘨</a></li>
                                    </ul>
                        </BoxContainer>
                        <br/>
                        <BoxContainer>
                                <ContainerLink><p>𝙈𝙖𝙩𝙝𝙚𝙢𝙖𝙩𝙞𝙘𝙨</p></ContainerLink>
                                    <ul>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/summer/courses/math/150.html">𝘊𝘢𝘭𝘤𝘶𝘭𝘶𝘴 𝘐</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/math/232.html">𝘓𝘪𝘯𝘦𝘢𝘳 𝘈𝘭𝘨𝘦𝘣𝘳𝘢</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/summer/courses/macm/316.html">𝘕𝘶𝘮𝘦𝘳𝘪𝘤𝘢𝘭 𝘈𝘯𝘢𝘭𝘺𝘴𝘪𝘴</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/101.html">𝘋𝘪𝘴𝘤𝘳𝘦𝘵𝘦 𝘔𝘢𝘵𝘩𝘦𝘮𝘢𝘵𝘪𝘤𝘴 𝘐</a></li>
                                        <li><a href="https://www.sfu.ca/students/calendar/2020/spring/courses/macm/201.html">𝘋𝘪𝘴𝘤𝘳𝘦𝘵𝘦 𝘔𝘢𝘵𝘩𝘦𝘮𝘢𝘵𝘪𝘤𝘴 𝘐𝘐</a></li>
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
