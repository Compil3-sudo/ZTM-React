import styled from "styled-components";

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  padding: 2rem 0;
  width: 90vw;
  margin: 0 auto;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1100px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 650px) {
    width: 95vw;
    grid-template-columns: 1fr;
  }
`;
