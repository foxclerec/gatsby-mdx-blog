import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./src/themes/themee";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
);
