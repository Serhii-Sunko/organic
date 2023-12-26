import styled from "styled-components";
import infotwoWrap from "../../../assets/img/contact-second.png";

export const ContactUsHeroWrap = styled.section`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  background-image: url(${infotwoWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 760px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 80px;

  @media (max-width: 560px) {
    justify-content: center;
    height: 600px;
  }
`;

export const LocationWrap = styled.div`
  padding: 46px 53px;
  background-color: #fff;
  border-radius: 30px;

  @media (max-width: 560px) {
    padding: 35px 25px;
  }

  @media (max-width: 380px) {
    padding: 25px 15px;
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;

    @media (max-width: 560px) {
      font-size: 28px;
      line-height: 26px;
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 14px;

    @media (max-width: 560px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 42px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    margin-bottom: 34px;
    width: 400px;

    @media (max-width: 560px) {
      width: 250px;
    }
  }
`;

export const InfoFlexTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  width: 270px;

  @media (max-width: 560px) {
    gap: 10px;
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    color: #274c5b;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #525c60;
  }

  svg {
    color: #274c5b;
  }
`;
