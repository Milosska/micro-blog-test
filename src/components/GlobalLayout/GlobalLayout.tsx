"use client";
import { FC, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { refreshUser } from "@/redux/authSlice/operations";
import { selectUser } from "@/redux/selectors";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const GlobalLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    const publicRoutes = ["/", "/login", "/register"];

    if (user && publicRoutes.includes(pathname)) {
      router.push("/general");
      return;
    }

    if (!user && !publicRoutes.includes(pathname)) {
      router.push("/");
    }
  }, [user, router, pathname]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <main style={{ flexGrow: 1, height: "100%" }}>{children}</main>
      <Footer />
    </>
  );
};
