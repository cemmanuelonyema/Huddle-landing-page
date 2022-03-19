import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  border-radius: 3rem;
  border: none;
  padding: 1.5rem 3.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ color }) => color || "#00252e"};
  cursor: pointer;
  transition: all 300ms;
  box-shadow: var(--shadow);

  &:hover {
    opacity: 0.8;
  }
`;
