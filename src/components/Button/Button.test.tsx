import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme/mainTheme";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it receives the text 'Sign up'", () => {
    test("Then it should show a button with text 'Sign up'", () => {
      const expectedButtonText = "Sign up";
      render(
        <ThemeProvider theme={mainTheme}>
          <Button text={expectedButtonText} />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
