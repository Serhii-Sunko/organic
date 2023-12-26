import styled from "styled-components";

export const AboutUsBannerSection = styled.section`
  width: 100%;
  background-color: #274c5b;

  padding: 180px 0;
  margin-bottom: 141px;

  @media (max-width: 800px) {
    padding: 80px 0;
  }
`;

export const AboutUsBannerContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h3 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 10px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #ffff;
    margin-bottom: 33px;
  }

  ul {
    display: flex;
    gap: 21px;

    @media (max-width: 1040px) {
      column-gap: 20px;
      row-gap: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      column-gap: 20px;
      row-gap: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    /* @media (max-width: 320px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    } */
  }

  li {
  }

  img {
    border-radius: 30px;
    height: 300px;
    width: 300px;

    @media (max-width: 1130px) {
      height: 240px;
      width: 240px;
    }

    @media (max-width: 600px) {
      height: 200px;
      width: 200px;
    }

    @media (max-width: 460px) {
      height: 120px;
      width: 120px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #ffff;
    margin-top: 24px;

    @media (max-width: 1130px) {
      margin-top: 12px;
    }

    @media (max-width: 600px) {
      margin-top: 10px;
    }
    @media (max-width: 460px) {
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
    }
  }
`;
