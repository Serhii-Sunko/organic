import React from "react";
import contactImg from "../../../assets/img/contact-first.png";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import {
  ContactUsInfoWrap,
  ContactImgWrap,
  ContactInfoWrap,
  InfoFlex,
} from "./ContactUsInfo.styled";

const ContactUsInfo = () => {
  return (
    <ContactUsInfoWrap>
      <ContactImgWrap>
        <img src={contactImg} alt="contactImg" />
      </ContactImgWrap>
      <ContactInfoWrap>
        <h3>We'd love to talk about how we can work together.</h3>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div>
          <InfoFlex>
            <div>
              <SlEnvolopeLetter size={45} />
            </div>
            <div>
              <h5>Mesasage</h5>
              <span>support</span>
            </div>
          </InfoFlex>
          <InfoFlex>
            <div>
              <FiPhone size={45} />
            </div>
            <div>
              <h5>Contact Us</h5>
              <span>+01 123 456 789</span>
            </div>
          </InfoFlex>
        </div>
        <ul>
          <li>
            <BsInstagram size={25} />
          </li>
          <li>
            <BsFacebook size={25} />
          </li>
          <li>
            <BsTwitter size={25} />
          </li>
        </ul>
      </ContactInfoWrap>
    </ContactUsInfoWrap>
  );
};

export default ContactUsInfo;
