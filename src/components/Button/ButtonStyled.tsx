import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: ${(props) => props.theme.fonts.mainFont};
  font-size: ${(props) => props.theme.fonts.sizes.bigSize};
  background-color: ${(props) => props.theme.colors.mainColor};
  color: #000;
  padding: 5px 100px;
  border-radius: 10px;
  width: 100%;
  margin-top: 1.3rem;

  :disabled {
    background-color: ${(props) => props.theme.colors.disabledButtonColor};
  }

  @media (min-width: 768px) {
    padding: 14px 110px;
    width: 23rem;
  }
`;

export default ButtonStyled;
