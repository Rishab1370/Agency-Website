"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4666FF",
      light: "#6B88FF",
      dark: "#2D4DE0",
      contrastText: "#F0F4FF",
    },
    secondary: {
      main: "#A347FF",
      light: "#C07AFF",
      dark: "#7D1FE0",
      contrastText: "#F0F4FF",
    },
    info: {
      main: "#47E0FF",
      light: "#7AEAFF",
      dark: "#1ABCD9",
      contrastText: "#07071A",
    },
    background: {
      default: "#07071A",
      paper: "#10102E",
    },
    text: {
      primary: "#F0F4FF",
      secondary: "#8892B0",
      disabled: "#4A5580",
    },
    divider: "#1E2A5A",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    button: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
