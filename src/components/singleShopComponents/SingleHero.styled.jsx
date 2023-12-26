import styled from "styled-components";
import SingleShopWrap from "../../assets/img/SingleShopHero.png";

export const SingleShopHeroWrap = styled.section`
  background-image: url(${SingleShopWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 450px;
  margin-bottom: 68px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    height: 400px;
    margin-bottom: 95px;
    background-position: left 20% center;
    margin-top: -80px;
  }

  @media (max-width: 570px) {
    height: 360px;
    margin-bottom: 65px;
    margin-top: -80px;
  }

  @media (max-width: 480px) {
    margin-top: -40px;
    height: 280px;
    margin-bottom: 45px;
    text-align: center;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 70px;
    font-weight: 800;
    line-height: 82px;
    color: #274c5b;

    @media (max-width: 570px) {
      font-size: 50px;
      font-weight: 800;
      line-height: 64px;
    }
  }
`;
