import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const signUpText = "Sign Up";
  return (
    <FormStyled className="login-form">
      <label htmlFor="email">
        Email
        <input
          required
          autoComplete="off"
          type="text"
          id="email"
          placeholder="Introduce your email"
        />
        <span className="form-required-modal">Email is required</span>
      </label>
      <label htmlFor="password">
        Password
        <input
          required
          type="password"
          id="password"
          placeholder="Introduce your password"
        />
        <span className="form-required-modal">Password is required</span>
      </label>

      <label htmlFor="image">
        Image
        <input required type="file" id="image" />
        <span className="form-required-modal">Image is required</span>
      </label>
      <div className="login-form__submit">
        <Button text={signUpText} />
        <span className="form-required-modal">Sorry, something went wrong</span>
      </div>
    </FormStyled>
  );
};

export default Form;
