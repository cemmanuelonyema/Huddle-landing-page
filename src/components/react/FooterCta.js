import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button.style";

const FooterCta = () => {
  return (
    <StyledFooterCta>
      <h2> Ready to build your community</h2>
      <Button bg="#ff0099" color="#fff">
        Get Started For Free
      </Button>{" "}
    </StyledFooterCta>
  );
};

const StyledFooterCta = styled.div`
  box-shadow: var(--shadow);
  width: 70rem;
  padding: 5rem 0;
  margin: 0 auto;
  text-align: center;
  /* margin-bottom: -3rem; */
  /* display: none; */
  z-index: 10;
`;

export default FooterCta;

// .small-box {
// 	margin-bottom: -50%;
// 	z-index: 1;
// }
