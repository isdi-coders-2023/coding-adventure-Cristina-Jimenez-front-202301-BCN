import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --primary-color: #cccf18;
  --error-modal-color: #F3949A;
  --primary-font: "Saira Stencil One", "Sans Serif";
  --secondary-font-size: 1.25rem;
}
*,
::after,
::before {
  box-sizing: border-box;
}

body {
  margin: 0;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
}

input {
  outline: none;
}

`;

export default GlobalStyles;
