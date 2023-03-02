import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When the user writes 'hola@hola.com' on Email input", () => {
    test("Then it should set input's value to 'hola@hola.com'", async () => {
      const inputLabel = "Email";
      const expectedUserEmail = "hola@hola.com";

      render(
        <ThemeProvider theme={mainTheme}>
          <Form />
        </ThemeProvider>
      );

      const emailInput = screen.getByLabelText(inputLabel);

      await userEvent.type(emailInput, expectedUserEmail);

      expect(emailInput).toHaveValue(expectedUserEmail);
    });
  });

  describe("When the user writes 'hola1234' on Password input", () => {
    test("Then it should set input's value to 'hola1234'", async () => {
      const inputLabel = "Password";
      const expectedUserPassword = "hola1234";

      render(
        <ThemeProvider theme={mainTheme}>
          <Form />
        </ThemeProvider>
      );

      const passwordInput = screen.getByLabelText(inputLabel);

      await userEvent.type(passwordInput, expectedUserPassword);

      expect(passwordInput).toHaveValue(expectedUserPassword);
    });
  });

  describe("When the user ataches a file on image input", () => {
    test("Then it should append the file to registerFormData", async () => {
      const inputLabel = "Image";
      const testFile = new File(["hello"], "hello.png", { type: "image/png" });

      render(
        <ThemeProvider theme={mainTheme}>
          <Form />
        </ThemeProvider>
      );
      const imageInput: HTMLInputElement = screen.getByLabelText(inputLabel);

      userEvent.upload(imageInput, testFile);

      expect(imageInput.files![0]).toStrictEqual(testFile);
    });
  });
});
