import styled from "styled-components";
import errorWrap from "../../assets/img/ErrorWrap.png";
import { Link } from "react-router-dom";

export const ErrorPageHeroWrap = styled.div`
  background-image: url(${errorWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 900px;
  margin-bottom: 160px;
  margin-top: -60px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 1200px) {
    background-position: left 40% center;
    height: 800px;
  }

  @media (max-width: 900px) {
    height: 700px;
    margin-bottom: 120px;
    background-position: left 20% center;
    margin-top: -80px;
  }

  @media (max-width: 570px) {
    height: 600px;
    margin-bottom: 65px;
    margin-top: -80px;
  }

  @media (max-width: 480px) {
    margin-top: -40px;
    height: 540px;
    margin-bottom: 45px;
    text-align: center;
  }
`;

export const ErrorTextWrap = styled.div`
  text-align: center;
  margin-right: 260px;

  @media (max-width: 1200px) {
    margin-right: 20px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 180px;
    font-weight: 800;
    line-height: 122px;
    color: #8fa8a8;

    @media (max-width: 900px) {
      font-size: 120px;
      font-weight: 800;
      line-height: 122px;
      color: #274c5b;
      margin-top: 30px;
    }

    @media (max-width: 570px) {
      font-size: 90px;
      font-weight: 800;
      line-height: 94px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 80px;
    font-weight: 800;
    line-height: 82px;
    color: #274c5b;

    @media (max-width: 900px) {
      font-size: 64px;
      font-weight: 800;
      line-height: 70px;
    }

    @media (max-width: 570px) {
      font-size: 50px;
      font-weight: 800;
      line-height: 64px;
      margin-bottom: 100px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 600;
    line-height: 29px;
    color: #525c60;
  }
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  text-align: center;
  background-color: #274c5b;
  padding: 20px 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  margin-top: 46px;
  border: none;

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
`;
