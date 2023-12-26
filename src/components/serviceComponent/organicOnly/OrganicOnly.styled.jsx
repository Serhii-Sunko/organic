import styled from "styled-components";
import organicWrap from "../../../assets/img/Service/Service2.png";

export const OrganicOnlySection = styled.div`
  background-image: url(${organicWrap});
  background-repeat: no-repeat;
  background-position: bottom center;
  height: 820px;
  margin-bottom: 140px;

  @media (max-width: 980px) {
    height: 620px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }

  div {
    padding-top: 100px;
    padding-right: 30px;
    padding-left: 30px;
    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 650px) {
      padding-right: 10px;
      padding-left: 10px;
      padding-top: 60px;
    }
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;

    @media (max-width: 980px) {
      font-size: 34px;
      line-height: 42px;
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    text-align: center;

    @media (max-width: 980px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 42px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    max-width: 670px;
    text-align: center;
  }
`;
