import styled from "styled-components";

export const PortfolioWrap = styled.li`
  width: 350px;
  padding: 10px 10px 20px 10px;
  background-color: #f9f8f8;
  box-shadow: 0px 5px 35px rgba(49, 48, 48, 0.35);
  border-radius: 10px;
  transition: 0.7s all ease;
  cursor: pointer;
  :hover {
    background-color: #e2dada;
    box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.35);
  }
  @media (max-width: 1080px) {
    width: 260px;
  }
  @media (max-width: 860px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    width: 240px;
  }

  @media (max-width: 530px) {
    width: 280px;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    width: 340px;
    height: 300px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1080px) {
      width: 250px;
      height: 220px;
    }
    @media (max-width: 860px) {
      width: 280px;
      height: 280px;
    }

    @media (max-width: 650px) {
      width: 240px;
      height: 210px;
    }
    @media (max-width: 530px) {
      width: 280px;
      height: 270px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;
    color: #274c5b;
    margin-bottom: 2px;
    margin-top: 10px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    color: #7eb693;
  }
`;
