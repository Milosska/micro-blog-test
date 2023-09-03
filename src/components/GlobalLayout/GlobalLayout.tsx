"use client";
import { FC, useEffect, Suspense } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { refreshUser } from "@/redux/authSlice/operations";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Loader } from "../Loader/Loader";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const GlobalLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<Loader />}>
        <main style={{ flexGrow: 1, height: "100%" }}>{children}</main>
      </Suspense>
      <Footer />
    </>
  );
};
