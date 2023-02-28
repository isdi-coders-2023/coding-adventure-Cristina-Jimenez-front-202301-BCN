import Button from "../Button/Button";

const Form = (): JSX.Element => {
  const signUpText = "Sign Up";
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        required
        autoComplete="off"
        type="text"
        id="email"
        placeholder="Introduce your email"
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        id="password"
        placeholder="Introduce your password"
      />
      <label htmlFor="image">Image</label>
      <input required type="file" id="image" />
      <Button text={signUpText} />
    </form>
  );
};

export default Form;
