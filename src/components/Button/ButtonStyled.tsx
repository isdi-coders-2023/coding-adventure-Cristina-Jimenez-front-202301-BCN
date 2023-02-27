import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: var(--primary-font);
  font-size: var(--secondary-font-size);
  background-color: var(--primary-color);
  padding: 5px 100px;
  border-radius: 10px;

  :disabled {
    background-color: var(--disabled-button-color);
  }

  @media (min-width: 768px) {
    padding: 5px 100px;
  }
`;

export default ButtonStyled;
