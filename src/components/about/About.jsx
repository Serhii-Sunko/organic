import React from "react";
import {
  AboutContainer,
  AboutSection,
  AboutLink,
  AboutImgContainer,
  AboutTextContainer,
  PreTitle,
  Text,
  Text2,
  Wrap,
} from "./About.styled";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import aboutImg1 from "../../assets/img/about-Icon.svg";
import aboutImg2 from "../../assets/img/about-Icon2.svg";

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutImgContainer></AboutImgContainer>
        <AboutTextContainer>
          <Wrap>
            <PreTitle>About Us</PreTitle>
            <h2>We Believe in Working Accredited Farmers</h2>
            <Text>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Text>
            <ul>
              <li>
                <img src={aboutImg1} alt="icon1" sizes="101px" />
                <div>
                  <h3>Organic Foods Only</h3>
                  <Text2>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </Text2>
                </div>
              </li>
              <li>
                <img src={aboutImg2} alt="icon2" sizes="101px" />
                <div>
                  <h3>Quality Standards</h3>
                  <Text2>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </Text2>
                </div>
              </li>
              <AboutLink to={"/shop"}>
                <span>
                  Shop Now <BsFillArrowRightCircleFill size={19} />
                </span>
              </AboutLink>
            </ul>
          </Wrap>
        </AboutTextContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
