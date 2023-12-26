import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NewsItemWrap = styled.li`
  width: 677px;
  height: 530px;
  /* background-color: #f9f8f8; */
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.55);
  border-radius: 50px;
  transition: 0.7s all ease;
  cursor: pointer;
  margin-bottom: 360px;

  :hover {
    background-color: #d4d2d2;
    box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.45);
  }
  @media (max-width: 1450px) {
    width: 500px;
  }
  @media (max-width: 1090px) {
    width: 400px;
    margin-bottom: 200px;
  }

  @media (max-width: 860px) {
    width: 300px;
    height: 360px;
    margin-bottom: 260px;
  }

  @media (max-width: 630px) {
    width: 500px;
    margin-bottom: 290px;
  }

  @media (max-width: 540px) {
    width: 280px;
    margin-bottom: 240px;
  }

  h5 {
    z-index: 2;
    color: #ffffff;
    background-color: #274c5b;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
  }
`;

export const NewsContent = styled.div`
  /* z-index: -1; */
`;

export const NewsImg = styled.img`
  /* position: relative; */
  /* background-color: #fff; */
  width: 677px;
  height: 530px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  @media (max-width: 1450px) {
    width: 500px;
  }

  @media (max-width: 1090px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 860px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 630px) {
    width: 500px;
    height: 400px;
  }
  @media (max-width: 540px) {
    width: 280px;
    height: 300px;
  }
`;

export const NewsLink = styled(NavLink)`
  display: inline-block;
  background-color: #efd372;
  padding: 22px 45px;
  color: #274c5b;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 10px;
  transition: background-color 0.7s ease;

  @media (max-width: 860px) {
    padding: 12px 15px;
  }

  :hover {
    background-color: #faef57;
  }

  span {
    display: flex;
    gap: 10px;
  }
`;

export const NewInfoWrap = styled.div`
  /* position: absolute; */
  padding: 45px 57px;
  background-color: #fff;
  /* margin-top: -180px;
  margin-left: 60px; */

  border-radius: 30px;
  z-index: 1;
  box-shadow: 5px 5px 35px rgba(0, 0, 0, 0.55);

  @media (max-width: 1450px) {
    /* margin-left: 0; */
    width: 500px;
    height: 300px;
  }

  @media (max-width: 1090px) {
    width: 400px;
    height: 280px;
    padding: 25px 27px;
  }

  @media (max-width: 860px) {
    width: 300px;
    height: 280px;
  }
  @media (max-width: 630px) {
    width: 500px;
    height: 240px;
  }

  @media (max-width: 540px) {
    width: 280px;
    height: 280px;
  }

  h4 {
    color: #274c5b;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }

  p {
    color: #274c5b;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    max-width: 400px;
    margin-bottom: 15px;
  }

  h3 {
    color: #274c5b;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    margin-bottom: 5px;

    @media (max-width: 1090px) {
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
    }
  }
`;

export const PersonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;
