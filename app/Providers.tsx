"use client";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./theme-provider";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer position="top-center" />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
