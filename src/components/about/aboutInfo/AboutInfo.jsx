import React from "react";
import {
  AboutContainer,
  AboutSection,
  AboutLink,
  AboutImgContainer,
  AboutTextContainer,
  PreTitle,
  Text,
} from "./AboutInfo.styled";
import infologo from "../../../assets/img/about/about-svg.svg";
import infologo2 from "../../../assets/img/about/about-svg2.svg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const AboutInfo = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutImgContainer></AboutImgContainer>
        <AboutTextContainer>
          <PreTitle>About Us</PreTitle>
          <h2>
            We do Creative <br /> Things for Success
          </h2>
          <Text>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley. <br />
            <br />
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Text>
          <ul>
            <li>
              <img src={infologo} alt="icon1" sizes="101px" />
              <div>
                <h3>Modern Agriculture Equipment</h3>
              </div>
            </li>
            <li>
              <img src={infologo2} alt="icon2" sizes="101px" />
              <div>
                <h3>No growth hormones are used</h3>
              </div>
            </li>
          </ul>
          <AboutLink to={"/projects"}>
            <span>
              Explore More <BsFillArrowRightCircleFill size={19} />
            </span>
          </AboutLink>
        </AboutTextContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutInfo;
