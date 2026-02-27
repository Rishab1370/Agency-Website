"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import darkTheme from "./theme";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: darkTheme.palette.primary,
    secondary: darkTheme.palette.secondary,
    info: darkTheme.palette.info,
    background: {
      default: "#F0F4FF",
      paper: "#fff",
    },
    text: {
      primary: "#07071A",
      secondary: "#4A5580",
      disabled: "#8892B0",
    },
    divider: "#E0E4F0",
  },
  typography: darkTheme.typography,
  shape: darkTheme.shape,
});

type ThemeMode = "light" | "dark";
interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggleTheme: () => {},
});

export function useThemeMode() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as ThemeMode) || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", mode);
      document.documentElement.setAttribute("data-theme", mode);
    }
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
