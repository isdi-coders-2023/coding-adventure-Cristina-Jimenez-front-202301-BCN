import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const signUpText = "Sign Up";

  const initialRegisterData = {
    email: "",
    password: "",
  };

  let registerFormData = new FormData();

  const [registerData, setRegisterData] = useState(initialRegisterData);

  const areFieldsEmpty =
    registerData.email === "" || registerData.password === "";

  const handleRegisterData = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [id]: value,
    });
  };

  const handleImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    registerFormData.append("avatar", files![0]);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <FormStyled className="register-form" onSubmit={onSubmitHandler}>
      <div className="register-form__field">
        <label htmlFor="email">
          Email
          <input
            value={registerData.email}
            onChange={handleRegisterData}
            required
            autoComplete="off"
            type="text"
            id="email"
            placeholder="Introduce your email"
          />
        </label>
        <span className="form-required-modal">Email is required</span>
      </div>
      <div className="register-form__field">
        <label htmlFor="password">
          Password
          <input
            onChange={handleRegisterData}
            value={registerData.password}
            required
            type="password"
            id="password"
            placeholder="Introduce your password"
          />
        </label>
        <span className="form-required-modal form-required-modal--visible">
          Password is required
        </span>
      </div>
      <div className="register-form__field">
        <label htmlFor="image">
          Image
          <input required type="file" id="image" onChange={handleImage} />
        </label>
      </div>
      <div className="register-form__submit">
        <Button areFieldsEmpty={areFieldsEmpty} text={signUpText} />
        <span className="form-required-modal">Sorry, something went wrong</span>
      </div>
    </FormStyled>
  );
};

export default Form;
