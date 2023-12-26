import React from "react";
import {
  TeamImgWrap,
  TeamContainerWrap,
  TeamContainerInfo,
  PersonInfo,
} from "./TeamSection.styled";
import { PreTitleInfo } from "../../about/aboutTeam/AboutTeam.styled";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import person1 from "../../../assets/img/about/person1.png";
import person2 from "../../../assets/img/about/person2.png";
import person3 from "../../../assets/img/about/person3.png";
import person4 from "../../../assets/img/about/person4.png";
import person5 from "../../../assets/img/about/person5.png";
import person6 from "../../../assets/img/about/person6.png";

const TeamSection = () => {
  return (
    <section>
      <TeamContainerWrap>
        <TeamContainerInfo>
          <h4>Team</h4>
          <h2>Our Organic Experts</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </TeamContainerInfo>
        <TeamImgWrap>
          <div>
            <img src={person1} alt="person1" />
            <PersonInfo>
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
            </PersonInfo>
          </div>
          <div>
            <img src={person2} alt="person2" />
            <PersonInfo>
              <div>
                <h4>Marianne Loreno</h4>
                <PreTitleInfo>Designer</PreTitleInfo>
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
            </PersonInfo>
          </div>
          <div>
            <img src={person3} alt="person3" />
            <PersonInfo>
              <div>
                <h4>Riga Pelore</h4>
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
            </PersonInfo>
          </div>
          <div>
            <img src={person4} alt="person3" />
            <PersonInfo>
              <div>
                <h4>Keira Knightley</h4>
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
            </PersonInfo>
          </div>
          <div>
            <img src={person5} alt="person3" />
            <PersonInfo>
              <div>
                <h4>Scott Lawrence</h4>
                <PreTitleInfo>Designer</PreTitleInfo>
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
            </PersonInfo>
          </div>
          <div>
            <img src={person6} alt="person3" />
            <PersonInfo>
              <div>
                <h4>Karen Allen</h4>
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
            </PersonInfo>
          </div>
        </TeamImgWrap>
      </TeamContainerWrap>
    </section>
  );
};

export default TeamSection;
