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
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
