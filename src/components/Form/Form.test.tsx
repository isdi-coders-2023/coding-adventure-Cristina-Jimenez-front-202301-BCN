import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme/mainTheme";
import Form from "./Form";

describe("Given the Form component", () => {
  describe("When it renders", () => {
    test("Then it should show an input with label 'Email'", () => {
      const inputLabel = "Email";

      render(
        <ThemeProvider theme={mainTheme}>
          <Form />
        </ThemeProvider>
      );

      const input = screen.getByLabelText(inputLabel);

      expect(input).toBeInTheDocument();
    });

    test("Then it should show an input with label 'Password'", () => {
      const inputLabel = "Password";

      render(
        <ThemeProvider theme={mainTheme}>
          <Form />
        </ThemeProvider>
      );

      const input = screen.getByLabelText(inputLabel);

      expect(input).toBeInTheDocument();
    });

    test("Then it should show an input with label 'Image'", () => {
      const inputLabel = "Image";

      render(
        <ThemeProvider theme={mainTheme}>
          <Form />
        </ThemeProvider>
      );

      const input = screen.getByLabelText(inputLabel);

      expect(input).toBeInTheDocument();
    });

    test("Then it should show an button with text 'Sign up'", () => {
      const buttonText = "Sign Up";

      render(
        <ThemeProvider theme={mainTheme}>
          <Form />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
