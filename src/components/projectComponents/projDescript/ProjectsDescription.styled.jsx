import styled from "styled-components";

export const ProjectsDescriptionWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 940px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  margin-bottom: 90px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 35px;
    font-weight: 800;
    line-height: 41px;
    color: #274c5b;
    margin-bottom: 24px;

    @media (max-width: 920px) {
      font-size: 28px;
      font-weight: 700;
      line-height: 36px;
    }
    @media (max-width: 630px) {
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: #525c60;
    max-width: 900px;
    margin-bottom: 40px;

    @media (max-width: 920px) {
      line-height: 24px;
    }

    @media (max-width: 630px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  img {
    border-radius: 30px;
    margin-bottom: 40px;
  }
`;
