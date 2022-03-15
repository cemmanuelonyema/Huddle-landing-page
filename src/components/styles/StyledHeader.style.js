import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--very-pale-cyan);
  padding: 2rem 0 7rem 0;
  height: 100%;

  h1 {
    /* color: #fff; */
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 3.5rem 0;
  
  @media (max-width: 48em) {
 margin-bottom: 6rem;


`;

export const Logo = styled.img`
  width: 14rem;
`;

export const Content = styled.div`
  flex: 1;

  @media (max-width: 48em) {
    flex-direction: column;
    text-align: center;
  }

  h1,
  p {
    margin-bottom: 2.5rem;
    @media (max-width: 48em) {
      margin-bottom: 3.5rem;
    }
  }

  p {
    font-size: 1.5rem;

    @media (max-width: 48em) {
      font-size: 2.1rem;
    }
  }
`;

export const Illustration = styled.div`
  flex: 1.5;

  @media (max-width: 48em) {
    flex: 1;
  }
`;
