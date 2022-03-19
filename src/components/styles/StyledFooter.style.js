import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--very-dark-cyan);
  color: var(--white);
  padding: 10rem 0 3rem 0;
  /* z-index: -10; */
  font-size: 1.4rem;

  .footLogo {
    width: 20rem;
  }

  * {
    flex: 1;
    margin-bottom: 3rem;
    
  @media (max-width: 48em) {
    margin-bottom: 1rem;
      
  }

  p {
    text-align: right;
    text-align: center;

  }

  li{
    @media (max-width: 48em) {
    text-align:center;
  }
  }

`;
