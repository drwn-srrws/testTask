import { CSSProperties } from "react";
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";

const theme = createTheme({
  palette,
  typography,
});

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    body1: true;
    pageTitle: true;
    homePrice: true;
  }
}
declare module "@mui/material/styles" {
  export interface TypographyVariants {
    body1: CSSProperties;
    pageTitle: CSSProperties;
    homePrice: CSSProperties;
  }

  export interface TypographyVariantsOptions {
    body1?: CSSProperties;
    pageTitle?: CSSProperties;
    homePrice?: CSSProperties;
  }

  interface CustomPalette {
    textColor: any;
    button: any;
  }

  // @ts-ignore
  export interface Palette extends CustomPalette {}
  // @ts-ignore
  export interface PaletteOptions extends CustomPalette {}
}

export default theme;
