import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: ${(props) => props.theme.fonts.mainFont};
  font-size: ${(props) => props.theme.fonts.sizes.bigSize};
  background-color: ${(props) => props.theme.colors.mainColor};
  padding: 5px 100px;
  border-radius: 10px;

  :disabled {
    background-color: ${(props) => props.theme.colors.disabledButtonColor};
  }

  @media (min-width: 768px) {
    padding: 14px 110px;
  }
`;

export default ButtonStyled;
