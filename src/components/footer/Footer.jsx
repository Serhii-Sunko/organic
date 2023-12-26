import React from "react";
import logo from "../../assets/img/Logo.svg";
import {
  FooterContainer,
  ContactWrap,
  LogoWraper,
  FooterLink,
  FooterLogoImg,
  FooterLinkPages,
  PagesWrapper,
} from "./Footer.styled";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <section>
      <FooterContainer>
        <ContactWrap>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <h4>Email</h4>
              <p>needhelp@Organia.com</p>
            </li>
            <li>
              <h4>Phone</h4>
              <p>666 888 888</p>
            </li>
            <li>
              <h4>Address</h4>
              <p>88 road, borklyn street, USA</p>
            </li>
          </ul>
        </ContactWrap>
        <LogoWraper>
          <FooterLink to="/">
            <FooterLogoImg src={logo} alt="Logo" height={53} width={36} />
            Organick
          </FooterLink>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <ul>
            <li>
              <BsInstagram size={20} color="#274C5B" />
            </li>
            <li>
              <BsFacebook size={20} color="#274C5B" />
            </li>
            <li>
              <BsTwitter size={20} color="#274C5B" />
            </li>
            <li>
              <BsPinterest size={20} color="#274C5B" />
            </li>
          </ul>
        </LogoWraper>
        <PagesWrapper>
          <h3>Utility Pages</h3>
          <ul>
            <li>
              <FooterLinkPages>Style Guide</FooterLinkPages>
            </li>
            <li>
              <FooterLinkPages to="*">404 Not Found</FooterLinkPages>
            </li>
            <li>
              <FooterLinkPages to="/licenses">Licences</FooterLinkPages>
            </li>
            <li>
              <FooterLinkPages to="/contactUs">Contact Us</FooterLinkPages>
            </li>
            <li>
              <FooterLinkPages>Password Protected</FooterLinkPages>
            </li>
            <li>
              <FooterLinkPages>Changelog</FooterLinkPages>
            </li>
          </ul>
        </PagesWrapper>
      </FooterContainer>
    </section>
  );
};

export default Footer;
