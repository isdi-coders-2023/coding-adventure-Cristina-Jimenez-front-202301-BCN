import Button from "../Button/Button";

const Form = (): JSX.Element => {
  const signUpText = "Sign Up";
  return (
    <>
      <h2>Register for the event</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          required
          autoComplete="off"
          type="text"
          id="username"
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
    </>
  );
};

export default Form;
