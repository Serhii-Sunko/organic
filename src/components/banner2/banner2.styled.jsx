import styled from "styled-components";
import bg1 from "../../assets/img/BI1.png";
import bg2 from "../../assets/img/BI2.png";
import bg3 from "../../assets/img/BI3.png";

export const Banner2Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: #f1f8f4;
  padding: 187px 0;

  @media (max-width: 980px) {
    gap: 10px;
    padding: 90px 0;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export const BannerOne = styled.div`
  background-image: url(${bg1});
  border-radius: 16px;
  width: 612px;
  height: 580px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    width: 550px;
    height: 450px;
  }

  @media (max-width: 1130px) {
    width: 450px;
    height: 400px;
  }

  @media (max-width: 980px) {
    width: 300px;
    height: 300px;
    background-position: left center;
  }

  p {
    display: inline-block;
    padding: 33px 83px;
    background-color: #fff;
    border-radius: 20px;

    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;

    @media (max-width: 1130px) {
      padding: 20px 20px;
    }
  }
`;

export const BannerTwo = styled.div`
  background-image: url(${bg2});
  border-radius: 16px;
  width: 612px;
  height: 580px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    width: 550px;
    height: 450px;
  }

  @media (max-width: 1130px) {
    width: 450px;
    height: 400px;
  }

  @media (max-width: 980px) {
    width: 300px;
    height: 300px;
  }

  p {
    display: inline-block;
    padding: 33px 83px;
    background-color: #fff;
    border-radius: 20px;

    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;
    @media (max-width: 1130px) {
      padding: 20px 20px;
    }
  }
`;

export const BannerThree = styled.div`
  background-image: url(${bg3});
  border-radius: 16px;
  width: 612px;
  height: 580px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    width: 550px;
    height: 450px;
  }
  @media (max-width: 1130px) {
    width: 450px;
    height: 400px;
  }

  @media (max-width: 980px) {
    width: 300px;
    height: 300px;
  }

  p {
    display: inline-block;
    padding: 33px 83px;
    background-color: #fff;
    border-radius: 20px;

    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;

    @media (max-width: 1130px) {
      padding: 20px 20px;
    }
  }
`;
