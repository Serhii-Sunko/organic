import styled from "styled-components";

export const SingleNewImgWrap = styled.div`
  margin-top: -90px;
  position: relative;
  margin-bottom: 340px;
  z-index: -25;

  @media (max-width: 900px) {
    margin-bottom: 140px;
  }

  @media (max-width: 560px) {
    margin-bottom: 80px;
  }
  @media (max-width: 480px) {
    margin-top: -50px;
  }

  img {
    width: 100%;
    height: 780px;

    @media (max-width: 920px) {
      height: 600px;
      margin-bottom: 95px;
      margin-top: 20px;
    }

    @media (max-width: 760px) {
      height: 500px;
    }

    @media (max-width: 560px) {
      height: 400px;
    }
    @media (max-width: 480px) {
      height: 320px;
    }
  }
`;

export const SingleNewInfoWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 97px 111px 97px 83px;
  border-radius: 36px;
  background-color: #f9f8f8;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.55);

  position: absolute;
  top: 800px;
  left: 340px;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  gap: 20px;

  @media (max-width: 1630px) {
    position: static;
    margin-top: -600px;
    padding: 50px 40px 50px 40px;
    width: 1100px;
  }

  @media (max-width: 1120px) {
    position: static;
    width: 900px;
    padding: 50px 10px 50px 10px;
  }

  @media (max-width: 920px) {
    width: 700px;
  }

  @media (max-width: 900px) {
    margin-top: -400px;
  }

  @media (max-width: 720px) {
    width: 620px;
    justify-content: space-around;
  }

  @media (max-width: 630px) {
    margin-top: -540px;
    flex-direction: column;
    width: 300px;
    background-color: rgb(249, 248, 248, 0.9);
    padding: 20px 10px 20px 10px;
  }

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  @media (max-width: 560px) {
    margin-top: -300px;
  }
`;

export const PostDateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    color: #274c5b;
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 22px;
    font-weight: 600;
    line-height: 25px;
    color: #274c5b;
    margin-left: 20px;
  }
`;

export const TitleWrap = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 60px;
    color: #274c5b;

    @media (max-width: 1120px) {
      font-size: 40px;
      font-weight: 600;
      line-height: 46px;
    }

    @media (max-width: 920px) {
      font-size: 34px;
      line-height: 32px;
    }

    @media (max-width: 720px) {
      font-size: 28px;
      line-height: 28px;
      margin-bottom: 5px;
    }
  }
`;

export const TextWrap = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #525c60;

    @media (max-width: 720px) {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;
