import styled from "styled-components";

const FormStyled = styled.form`
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  color: ${(props) => props.theme.fonts.colors.white};
  display: flex;
  background-color: ${(props) => props.theme.colors.DarkColor};
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem;

  .register-form {
    &__submit {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.7rem;
    }

    &__field {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.5rem;
    }
  }

  input {
    padding: 0.5rem;
    border-radius: 10px;
    height: 40px;
    width: 100%;
    margin-top: 0.5rem;
    display: block;
    background-color: ${(props) => props.theme.colors.LightColor};
  }

  .form-required-modal {
    visibility: hidden;
    color: ${(props) => props.theme.colors.errorModalColor};
    font-size: 0.938rem;
    font-weight: 400;

    &&__visible {
      visibility: visible;
    }
  }
`;

export default FormStyled;
