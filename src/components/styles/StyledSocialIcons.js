import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    justify-content: flex-start;

    @media (max-width: 48em) {
      width: 100%;
      justify-content: space-around;
    }
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    height: 4rem;
    width: 4rem;
  }
`;
