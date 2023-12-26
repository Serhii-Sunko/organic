import styled from "styled-components";
import { Link } from "react-router-dom";
import bgAbout from "../../../assets/img/about/aboutUs.png";

export const AboutSection = styled.section`
  height: 929px;
  /* margin-bottom: 170px; */
`;

export const AboutContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 950px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const AboutImgContainer = styled.div`
  background-image: url(${bgAbout});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -120px center;
  height: 920px;
  width: 929px;
  margin-right: 20px;

  @media (max-width: 950px) {
    position: relative;
    height: 900px;
    width: 800px;
    z-index: -2;
  }

  @media (max-width: 770px) {
    height: 700px;
    width: 600px;
  }

  @media (max-width: 580px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const AboutTextContainer = styled.div`
  width: 45%;
  padding: 0 10px;

  @media (max-width: 1200px) {
    width: 65%;
  }

  @media (max-width: 950px) {
    position: absolute;
    z-index: -1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.6);
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    width: 530px;
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 14px;

    @media (max-width: 1200px) {
      width: 400px;
      font-size: 40px;
      font-weight: 700;
      line-height: 42px;
    }

    @media (max-width: 430px) {
      width: 300px;
      font-size: 30px;
      font-weight: 700;
      line-height: 30px;
    }
  }

  ul {
    display: flex;

    @media (max-width: 950px) {
      flex-direction: column;
    }
  }

  li {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 19px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    color: #274c5b;
  }
`;

export const PreTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #7eb693;
  margin-bottom: 10px;

  margin-top: 110px;

  @media (max-width: 950px) {
    margin-top: 50px;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  color: #525c60;
  margin-bottom: 46px;
  max-width: 650px;

  @media (max-width: 1200px) {
    width: 400px;
    color: #34383a;
  }

  @media (max-width: 430px) {
    width: 300px;
  }
`;

export const AboutLink = styled(Link)`
  display: inline-block;
  background-color: #274c5b;
  padding: 28px 49px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  margin-top: 46px;

  @media (max-width: 430px) {
    padding: 18px 29px;
  }

  :hover {
    background-color: #183541;
  }

  span {
    display: flex;
    gap: 10px;
  }
`;
