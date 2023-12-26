import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import person1 from "../../../assets/img/about/person1.png";
import person2 from "../../../assets/img/about/person2.png";
import person3 from "../../../assets/img/about/person3.png";
import {
  TeamContainer,
  PersonInfoWrap,
  ImgWrap,
  TeamText,
  PreTitleInfo,
} from "./AboutTeam.styled";

const AboutTeam = () => {
  return (
    <section>
      <TeamContainer>
        <h5>Team</h5>
        <h3>Our Organic Experts</h3>
        <TeamText>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </TeamText>
        <ImgWrap>
          <div>
            <img src={person1} alt="person1" />
            <PersonInfoWrap>
              <div>
                <h4>Giovani Bacardo</h4>
                <PreTitleInfo>Farmer</PreTitleInfo>
              </div>
              <div>
                <ul>
                  <li>
                    <BsFacebook color="#274C5B" size={22} />
                  </li>
                  <li>
                    <BsTwitter color="#274C5B" size={22} />
                  </li>
                </ul>
              </div>
            </PersonInfoWrap>
          </div>
          <div>
            <img src={person2} alt="person2" />
            <PersonInfoWrap>
              <div>
                <h4>Giovani Bacardo</h4>
                <PreTitleInfo>Farmer</PreTitleInfo>
              </div>
              <div>
                <ul>
                  <li>
                    <BsFacebook color="#274C5B" size={22} />
                  </li>
                  <li>
                    <BsTwitter color="#274C5B" size={22} />
                  </li>
                  <li>
                    <BsInstagram color="#274C5B" size={22} />
                  </li>
                </ul>
              </div>
            </PersonInfoWrap>
          </div>
          <div>
            <img src={person3} alt="person3" />
            <PersonInfoWrap>
              <div>
                <h4>Giovani Bacardo</h4>
                <PreTitleInfo>Farmer</PreTitleInfo>
              </div>
              <div>
                <ul>
                  <li>
                    <BsFacebook color="#274C5B" size={22} />
                  </li>
                  <li>
                    <BsTwitter color="#274C5B" size={22} />
                  </li>
                  <li>
                    <BsInstagram color="#274C5B" size={22} />
                  </li>
                </ul>
              </div>
            </PersonInfoWrap>
          </div>
        </ImgWrap>
      </TeamContainer>
    </section>
  );
};

export default AboutTeam;
