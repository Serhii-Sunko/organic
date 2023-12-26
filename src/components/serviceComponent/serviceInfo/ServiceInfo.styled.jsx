import styled from "styled-components";

export const ServiceInfoWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  margin-bottom: 90px;

  h4 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 30px;
      line-height: 42px;
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 30px;
      font-weight: 700;
      line-height: 40px;
    }
  }
`;

export const ServiceInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 6px;

    @media (max-width: 940px) {
      font-size: 20px;
      line-height: 20px;
    }

    @media (max-width: 790px) {
      font-size: 18px;
    }
    @media (max-width: 360px) {
      font-size: 16px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;

    @media (max-width: 940px) {
      font-size: 16px;
      line-height: 20px;
    }
    @media (max-width: 790px) {
      font-size: 14px;
    }
  }

  img {
    margin-bottom: 6px;
  }
`;

export const ListOne = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (max-width: 940px) {
    gap: 20px;
  }

  @media (max-width: 560px) {
    margin-right: 30px;
  }
  @media (max-width: 360px) {
    margin-right: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  p {
    width: 390px;
    text-align: end;

    @media (max-width: 1530px) {
      width: 240px;
    }
    @media (max-width: 790px) {
      width: 140px;
    }

    @media (max-width: 360px) {
      width: 120px;
    }
  }
`;

export const ListTwo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 940px) {
    gap: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    width: 390px;

    @media (max-width: 1530px) {
      width: 240px;
    }
    @media (max-width: 790px) {
      width: 140px;
    }
    @media (max-width: 360px) {
      width: 120px;
    }
  }
`;

export const ProductImg = styled.img`
  height: 800px;

  @media (max-width: 1530px) {
    height: 600px;
  }

  @media (max-width: 940px) {
    height: 550px;
    width: 300px;
  }

  @media (max-width: 790px) {
    height: 400px;
    width: 300px;
  }

  @media (max-width: 600px) {
    height: 360px;
  }

  @media (max-width: 560px) {
    display: none;
  }
`;
