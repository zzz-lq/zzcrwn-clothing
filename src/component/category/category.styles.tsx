import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 10px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
  }
`