// import Introimage from "../assets/Introimg.svg";
import play from "../assets/play-button.png";
// import bgTransparent from "../assets/bgtransparent1.svg";
// import bgTransparents from "../assets/bgTransparent2.svg";
// import midTransparent from "../assets/bgTransparent3.svg";
import Header from "../Navbar";
import { useState } from "react";

import {
  Intro1,
  Intro2,
  Intro3,
  Introhd1,
  Introp1,
  IntroCircles,
  IntroWhiteCircle,
  IntroBlueCircle,
  IntroRightText,
  IntroButtonVideo,
  IntroProposalText,
  IntroPlayVideo,
  IntroPlayButton,
  IntroVideoText,
  IntroExplorePart,
  IntroAchievements,
  IntroOrangeText,
  IntroBlackText,
  Intro,
  IntroRightPart,
  IntroRightImg,
  TransparentImg,
  TransparentImgs,
  TransparentImgss,
} from "./styledComponents";

const HeaderSection = () => {
  const [projects] = useState("200+k");
  const [active] = useState("81+k");
  const [customer] = useState("24/7");

  return (
    <>
      {/*   <Header /> */}
      <Intro>
        <TransparentImg src={bgTransparent} alt="not found" />
        <TransparentImgs src={bgTransparents} alt="not found" />
        <TransparentImgss src={midTransparent} alt="not found" />
        <Intro1>
          <Intro2>
            <Introhd1>
              Empowerng the Next
              Generation of Software
              And Web-app
              Development
            </Introhd1>

            <Introp1>
              Development agency specialized in delivering
              <br />
              world-class solutions for the web & mobile through mature
              <br />
              and emerging technology.
            </Introp1>
            <IntroButtonVideo>
              <IntroProposalText>Get a Proposal</IntroProposalText>
              <IntroPlayVideo>
                <IntroPlayButton src={play} alt="not found" />
                <IntroVideoText>Watch Our Intro</IntroVideoText>
              </IntroPlayVideo>
            </IntroButtonVideo>
            <Intro3>
              <IntroCircles>
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroBlueCircle />
                <IntroBlueCircle />
              </IntroCircles>

              <IntroRightText>
                1.8k People bought our services today.
              </IntroRightText>
            </Intro3>
          </Intro2>
          <IntroRightPart>
            <IntroRightImg src={Introimage} alt="not found" />
          </IntroRightPart>
        </Intro1>
        <IntroExplorePart>
          <IntroAchievements>
            <IntroOrangeText>{projects}</IntroOrangeText>

            <IntroBlackText>Projects Complete</IntroBlackText>
          </IntroAchievements>
          <IntroAchievements>
            <IntroOrangeText>{active}</IntroOrangeText>

            <IntroBlackText>Active Customers</IntroBlackText>
          </IntroAchievements>
          <IntroAchievements>
            <IntroOrangeText>{customer}</IntroOrangeText>

            <IntroBlackText>Customer Support</IntroBlackText>
          </IntroAchievements>
        </IntroExplorePart>
      </Intro>
    </>
  );
};

export default HeaderSection;
