import styled from "styled-components";

export const StyledContent = styled.section`
  gap: 6rem;
  padding: 4rem 10rem;
  /* padding: 4rem; */
  box-shadow: var(--shadow);
  margin: 4rem 0;

  @media (max-width: 48em) {
    padding: 4rem;

    .col-reverse {
      flex-direction: column-reverse;
    }
  }
`;
