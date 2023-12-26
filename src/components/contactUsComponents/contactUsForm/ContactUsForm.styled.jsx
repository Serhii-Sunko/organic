import styled from "styled-components";

export const ContactUsFormWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1120px;
  margin: 0 auto;

  margin-bottom: 90px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    color: #274c5b;
  }
`;

export const FirstInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 46px;

  @media (max-width: 1100px) {
    gap: 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }

  input {
    margin-top: 10px;
    width: 500px;
    padding: 25px 50px 25px 15px;
    border-radius: 16px;
    border: 1px solid #7eb693;

    @media (max-width: 1100px) {
      width: 360px;
    }
    @media (max-width: 770px) {
      width: 230px;
    }
    @media (max-width: 500px) {
      width: 380px;
    }
    @media (max-width: 400px) {
      width: 280px;
    }
  }
  input:focus,
  input:active {
    outline: none;
  }

  ::placeholder {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: #ababab;
  }
`;

export const SecondInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 46px;

  @media (max-width: 1100px) {
    gap: 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }

  input {
    margin-top: 10px;
    width: 500px;
    padding: 25px 50px 25px 15px;
    border-radius: 16px;
    border: 1px solid #7eb693;

    @media (max-width: 1100px) {
      width: 360px;
    }
    @media (max-width: 770px) {
      width: 230px;
    }
    @media (max-width: 500px) {
      width: 380px;
    }
    @media (max-width: 400px) {
      width: 280px;
    }
  }
  input:focus,
  input:active {
    outline: none;
  }

  ::placeholder {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: #ababab;
  }
`;

export const ThreeInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  textarea {
    margin-top: 10px;
    width: 1050px;
    height: 280px;
    padding: 25px 50px 250px 15px;
    border-radius: 16px;
    border: 1px solid #7eb693;
    overflow-y: hidden;

    @media (max-width: 1100px) {
      width: 740px;
    }

    @media (max-width: 770px) {
      width: 480px;
      height: 120px;
    }
    @media (max-width: 500px) {
      width: 380px;
      height: 80px;
    }
    @media (max-width: 400px) {
      width: 280px;
    }
  }
  textarea:focus,
  textarea:active {
    outline: none;
  }

  ::placeholder {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: #ababab;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 50px;

  button {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    color: #fff;
    background-color: #274c5b;
    padding: 28px 47px;
    border-radius: 20px;
    border: none;
    transition: background-color 0.7s ease;

    :hover {
      background-color: #0f3544;
    }
  }
`;
