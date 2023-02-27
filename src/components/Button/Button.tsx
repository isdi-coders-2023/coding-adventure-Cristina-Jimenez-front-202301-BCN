interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <button className="form-button">{text}</button>;
};

export default Button;
