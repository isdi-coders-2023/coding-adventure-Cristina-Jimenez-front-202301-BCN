import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      disabledButtonColor: string;
      errorModalColor: string;
    };
    fonts: {
      mainFont: string;
      secondaryFont: string;
      sizes: {
        bigSize: string;
      };
      weights: {
        bold: string;
      };
      colors: {
        white: string;
      };
    };
  }
}
