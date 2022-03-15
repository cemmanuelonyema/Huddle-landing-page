import styled from "styled-components";

export const FLex = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 3rem;

  @media (max-width: 48em) {
    flex-direction: column;
    text-align: center;
    gap: 7rem;
  }
`;
