import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled className="form-button">{text}</ButtonStyled>;
};

export default Button;
