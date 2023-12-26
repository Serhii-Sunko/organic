import styled from "styled-components";
import bgPreFooter from "../../assets/img/PreFooter.png";

export const PreFooterContainer = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  max-width: 100%;
  margin: 0 auto;

  background-image: url(${bgPreFooter});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 323px;
  margin-bottom: 117px;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    background-size: cover;
    height: 300px;
    width: 1360px;
    margin-bottom: 90px;
    border-radius: 40px;
  }

  @media (max-width: 1050px) {
    height: 240px;
    margin-bottom: 70px;
  }

  @media (max-width: 980px) {
    margin-top: 40px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    height: 300px;
    margin-bottom: 60px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #fff;

    @media (max-width: 1050px) {
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
    }

    @media (max-width: 790px) {
      font-size: 32px;
      font-weight: 700;
      line-height: 42px;
    }
  }

  input {
    padding: 28px 100px 28px 23px;
    border-radius: 20px;
    border: none;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 22px;
    font-weight: 500;
    line-height: 21px;
    color: #000;
    margin-right: 10px;
    outline: none;

    @media (max-width: 1050px) {
      padding: 20px 26px 22px 16px;
    }

    @media (max-width: 790px) {
      padding: 16px 10px;
      font-size: 16px;
      font-weight: 500;
      line-height: 16px;
    }

    @media (max-width: 560px) {
      padding: 16px 10px;
      margin-right: 2px;
    }

    ::placeholder {
      font-family: ${({ theme }) => theme.fonts.text};
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
      color: #274c5b;

      @media (max-width: 560px) {
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
      }
    }
  }

  button {
    padding: 32px 47px;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    color: #fff;
    background-color: #274c5b;
    border-radius: 10px;
    border: none;
    transition: background-color 0.7s ease;

    @media (max-width: 1050px) {
      padding: 22px 15px;
      font-size: 18px;
      font-weight: 500;
      line-height: 19px;
    }

    @media (max-width: 750px) {
      padding: 18px 10px;
      font-size: 16px;
      font-weight: 500;
      line-height: 16px;
    }

    @media (max-width: 560px) {
      /* padding: 18px 10px; */
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      border-radius: 20px;
    }

    :hover {
      background-color: #183541;
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;
