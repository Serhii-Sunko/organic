import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OfferSection = styled.section`
  background-color: #274c5b;
  height: 950px;

  @media (max-width: 1441px) {
    height: 800px;
  }

  @media (max-width: 1040px) {
    height: 860px;
  }

  @media (max-width: 460px) {
    height: 640px;
  }
`;

export const OfferWrapContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const OffersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextWrap = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 10px;
    margin-top: 200px;

    @media (max-width: 1450px) {
      margin-top: 40px;
    }

    @media (max-width: 1080px) {
      font-size: 30px;
      font-weight: 400;
      line-height: 40px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #fff;
    margin-bottom: 50px;

    @media (max-width: 1450px) {
      margin-bottom: 0;
    }
    @media (max-width: 1080px) {
      font-size: 34px;
      font-weight: 700;
      line-height: 36px;
    }

    @media (max-width: 690px) {
      font-size: 28px;
      line-height: 32px;
    }

    @media (max-width: 580px) {
      font-size: 32px;
      font-weight: 700;
      line-height: 36px;
    }
  }
`;

export const OfferLink = styled(NavLink)`
  display: inline-block;
  background-color: #efd372;
  padding: 28px 49px;
  color: #274c5b;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  margin-top: 200px;

  @media (max-width: 1450px) {
    margin-bottom: 40px;
    margin-top: 120px;
  }

  @media (max-width: 1080px) {
    padding: 20px 24px;
    font-size: 18px;
    line-height: 20px;
  }

  @media (max-width: 690px) {
    padding: 16px 18px;
    font-size: 16px;
    line-height: 18px;
  }

  @media (max-width: 580px) {
    margin-top: 40px;
    padding: 20px 24px;
    font-size: 18px;
    line-height: 20px;
  }

  :hover {
    background-color: #faef57;
  }

  span {
    display: flex;
    gap: 10px;
  }
`;
