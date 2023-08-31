"use client";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};
