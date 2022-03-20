import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  /* justify-content: space-between; */
  /* gap: ${({ gap }) => gap || "3rem"} */
  gap: 3rem;

  /* 
  & > div,
  & > ul {
    flex: 1;
  } */

  @media (max-width: 48em) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`;
