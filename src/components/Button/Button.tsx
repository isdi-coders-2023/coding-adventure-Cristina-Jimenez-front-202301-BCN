import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  areFieldsEmpty: boolean;
}

const Button = ({ text, areFieldsEmpty }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled disabled={areFieldsEmpty} className="form-button">
      {text}
    </ButtonStyled>
  );
};

export default Button;
