import styled from "styled-components";

export const LicensesTitleWrap = styled.div`
  background-color: #fafafa;
  height: 450px;
  margin-bottom: 120px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 1000px) {
    height: 400px;
  }

  @media (max-width: 900px) {
    height: 350px;
  }

  @media (max-width: 600px) {
    height: 300px;
    gap: 20px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    margin-top: -5px;
    gap: 10px;
    margin-bottom: 80px;
  }

  @media (max-width: 410px) {
    height: 240px;
  }

  img {
    @media (max-width: 410px) {
      width: 60px;
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 70px;
    font-weight: 800;
    line-height: 82px;
    color: #274c5b;

    @media (max-width: 600px) {
      font-size: 50px;
      font-weight: 800;
      line-height: 68px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
      font-weight: 700;
      line-height: 52px;
    }

    @media (max-width: 410px) {
      /* font-size: 28px;
      font-weight: 700;
      line-height: 36px; */
    }
  }
`;

export const LicensesContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  margin-bottom: 90px;
`;

export const LicensList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 480px) {
    gap: 60px;
  }
`;

export const LicensItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: 910px) {
    gap: 50px;
  }

  @media (max-width: 680px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 40px;
    font-weight: 800;
    line-height: 47px;
    color: #274c5b;

    @media (max-width: 1100px) {
      font-size: 30px;
      font-weight: 700;
      line-height: 40px;
    }

    @media (max-width: 910px) {
      font-size: 26px;
      font-weight: 700;
      line-height: 24px;
    }

    @media (max-width: 680px) {
      font-size: 20px;
      font-weight: 600;
      line-height: 20px;
    }
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 30px;
    font-weight: 800;
    line-height: 35px;
    color: #274c5b;
    margin-top: 45px;
    margin-bottom: 12px;

    @media (max-width: 1100px) {
      font-size: 26px;
      font-weight: 700;
      line-height: 30px;
    }
    @media (max-width: 910px) {
      font-size: 22px;
    }

    @media (max-width: 680px) {
      font-size: 18px;
      font-weight: 600;
      line-height: 20px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    color: #525c60;
    max-width: 650px;

    @media (max-width: 1100px) {
      max-width: 550px;
    }

    @media (max-width: 910px) {
      font-size: 14px;
      line-height: 26px;
      max-width: 400px;
    }

    @media (max-width: 680px) {
      line-height: 22px;
      max-width: 300px;
    }
  }
`;
