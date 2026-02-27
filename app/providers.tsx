"use client";
import { ThemeProvider } from "@/lib/ThemeContext";
import { ModalProvider } from "@/lib/ModalContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  );
}
