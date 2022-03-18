import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: var(--very-dark-cyan);
  color: var(--white);
  padding: 10rem 0 3rem 0;
  z-index: -10;
  font-size: 1.4rem;

  .footLogo {
    width: 20rem;

  }
  * {
    flex: 1;
    margin-bottom
  }
  ul li , .footLogo  {
    margin-bottom: 3rem;
  }
  p{
      text-align:right;
  }

  /* width: 100%; */
`;

/* 
  ul {
    list-style-type: none;
  }

  

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
` */
