import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background-color: var(--main);
  border: 0px;
  color: var(--white);
  font-size: 45px;
  :focus {
    outline: none;
    border-color: var(--main);
  }
  @media (max-width: 700px) {
    font-size: 35px;
  }
`;
