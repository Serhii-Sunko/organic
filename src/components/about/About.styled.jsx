import styled from "styled-components";
import { Link } from "react-router-dom";
import bgAbout from "../../assets/img/about.png";

export const AboutSection = styled.section`
  background-color: #f9f8f8;
  height: 960px;
  margin-bottom: 170px;

  @media (max-width: 710px) {
    margin-bottom: 70px;
  }
`;

export const AboutContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;

  @media (max-width: 1330px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  @media (max-width: 710px) {
    padding-right: 1px;
    padding-left: 1px;
  }
`;

export const AboutImgContainer = styled.div`
  background-image: url(${bgAbout});
  background-color: #f9f8f8;
  background-repeat: no-repeat;
  background-position: -100px center;
  height: 911px;
  width: 800px;
  margin-right: 40px;

  @media (max-width: 1330px) {
    height: 900px;
    width: 700px;
  }
  @media (max-width: 1150px) {
    height: 800px;
    width: 500px;
  }

  @media (max-width: 710px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  @media (max-width: 710px) {
    padding-top: 30px;
    background-color: rgb(249, 248, 248, 0.6);

    height: 880px;
  }
`;

export const AboutTextContainer = styled.div`
  width: 48%;

  @media (max-width: 710px) {
    background-image: url(${bgAbout});
    background-color: #f9f8f8;
    background-repeat: no-repeat;
    background-position: left left;
    height: 800px;
    width: 800px;
    margin-left: 20px;
  }

  h2 {
    width: 530px;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 14px;

    @media (max-width: 1110px) {
      width: 400px;
      font-size: 40px;
      font-weight: 800;
      line-height: 49px;
    }

    @media (max-width: 850px) {
      width: 340px;
      font-size: 32px;
      font-weight: 700;
      line-height: 34px;
    }

    @media (max-width: 710px) {
      width: 300px;
    }
  }

  ul {
  }

  li {
    display: flex;
    margin-bottom: 32px;

    @media (max-width: 710px) {
      margin-bottom: 20px;
    }
  }

  img {
    margin-right: 19px;
    width: 80px;
    height: 60px;

    @media (max-width: 710px) {
      margin-right: 19px;
      width: 60px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 12px;

    @media (max-width: 1280px) {
      font-size: 22px;
      font-weight: 700;
      line-height: 22px;
    }
    @media (max-width: 1150px) {
      font-size: 18px;
      font-weight: 600;
      line-height: 18px;
    }

    @media (max-width: 710px) {
      font-size: 22px;
      font-weight: 700;
      line-height: 22px;
    }
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

  @media (max-width: 1280px) {
    font-size: 28px;
    font-weight: 400;
    line-height: 39px;
  }
  @media (max-width: 1150px) {
    font-size: 28px;
    line-height: 32px;
  }

  @media (max-width: 710px) {
    font-size: 28px;
    font-weight: 400;
    line-height: 39px;
    margin-top: 30px;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  color: #525c60;
  margin-bottom: 46px;

  @media (max-width: 1280px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    width: 400px;
  }

  @media (max-width: 710px) {
    width: 300px;
  }

  @media (max-width: 1150px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  @media (max-width: 840px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    width: 300px;
    margin-bottom: 20px;
  }

  @media (max-width: 710px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
  }
`;

export const Text2 = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;

  @media (max-width: 1150px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    width: 200px;
    color: #525c60;
  }

  @media (max-width: 710px) {
    font-size: 18px;
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

  @media (max-width: 1150px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    padding: 20px 36px;
  }

  @media (max-width: 710px) {
    margin-top: 20px;
  }

  :hover {
    background-color: #183541;
  }

  span {
    display: flex;
    gap: 10px;
  }
`;
