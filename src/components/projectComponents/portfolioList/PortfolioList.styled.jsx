import styled from "styled-components";

export const PortfolioListWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  margin-bottom: 90px;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-items: center;
    column-gap: 20px;
    row-gap: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 122px;

    @media (max-width: 1440px) {
      column-gap: 20px;
      row-gap: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 1070px) {
      column-gap: 20px;
      row-gap: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 860px) {
      column-gap: 20px;
      row-gap: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 530px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
