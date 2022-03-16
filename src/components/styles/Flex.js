import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: ${({ gap }) => gap || "3rem"};
  padding: ${({ pad }) => pad};
  box-shadow: ${({ shadow }) => shadow};
  /* box-shadow: var(--shadow); */

  @media (max-width: 48em) {
    flex-direction: column;
    text-align: center;
    gap: 7rem;
  }
`;
