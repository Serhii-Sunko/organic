import styled from "styled-components";

export const ContactUsInfoWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 90px;

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
  }

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const ContactImgWrap = styled.div`
  img {
    max-width: 620px;
    border-radius: 20px;

    @media (max-width: 1180px) {
      max-width: 520px;
    }

    @media (max-width: 970px) {
      max-width: 420px;
      height: 600px;
    }

    @media (max-width: 760px) {
      display: none;
    }
  }
`;

export const ContactInfoWrap = styled.div`
  width: 700px;

  @media (max-width: 1200px) {
    width: 600px;
  }

  @media (max-width: 1060px) {
    width: 500px;
  }

  @media (max-width: 520px) {
    max-width: 400px;
  }

  @media (max-width: 430px) {
    width: 300px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 14px;

    @media (max-width: 1200px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 49px;
    }

    @media (max-width: 1060px) {
      font-size: 30px;
      font-weight: 600;
      line-height: 39px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    margin-bottom: 34px;
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: #274c5b;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }

  li {
    padding: 20px;
    background-color: #eff6f1;
    border-radius: 50%;
    color: #274c5b;
  }
`;

export const InfoFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;

  svg {
    color: #274c5b;
  }
`;
