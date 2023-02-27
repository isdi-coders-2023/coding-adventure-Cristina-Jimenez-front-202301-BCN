import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: "Saira Stencil One", "Sans Serif";
  font-size: 1.25rem;
  background-color: #cccf18;
  width: 325px;
  height: 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  :disabled {
    background-color: #8b8d1b;
  }

  @media (min-width: 768px) {
    height: 60px;
  }
`;

export default ButtonStyled;
