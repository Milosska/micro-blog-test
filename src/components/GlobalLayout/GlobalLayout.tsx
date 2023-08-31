"use client";
import { FC } from "react";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const GlobalLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main style={{ flexGrow: 1, height: "100%" }}>{children}</main>
      <Footer />
    </>
  );
};
