import Button from "./components/Button/Button";

const App = (): JSX.Element => {
  const signUpText = "Sign up";
  return (
    <div className="app">
      <Button text={signUpText} />
    </div>
  );
};

export default App;
