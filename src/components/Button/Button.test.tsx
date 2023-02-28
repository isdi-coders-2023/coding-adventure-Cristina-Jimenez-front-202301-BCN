import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it receives the text 'Sign up'", () => {
    test("Then it should show a button with text 'Sign up'", () => {
      const expectedButtonText = "Sign up";
      render(<Button text={expectedButtonText} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
