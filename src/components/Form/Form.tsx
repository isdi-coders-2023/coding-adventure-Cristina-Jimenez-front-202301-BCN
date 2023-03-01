import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const signUpText = "Sign Up";
  return (
    <FormStyled className="register-form">
      <div className="login-form__field">
        <label htmlFor="email">
          Email
          <input
            required
            autoComplete="off"
            type="text"
            id="email"
            placeholder="Introduce your email"
          />
        </label>
        <span className="form-required-modal">Email is required</span>
      </div>
      <div className="login-form__field">
        <label htmlFor="password">
          Password
          <input
            required
            type="password"
            id="password"
            placeholder="Introduce your password"
          />
        </label>
        <span className="form-required-modal">Password is required</span>
      </div>
      <div className="login-form__field">
        <label htmlFor="image">
          Image
          <input required type="file" id="image" />
        </label>
        <span className="form-required-modal">Image is required</span>
      </div>
      <div className="login-form__submit">
        <Button text={signUpText} />
        <span className="form-required-modal">Sorry, something went wrong</span>
      </div>
    </FormStyled>
  );
};

export default Form;
