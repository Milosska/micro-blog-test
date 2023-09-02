"use client";
import { FC, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { supabase } from "@/helpers/supabase/supabaseClient";
import { User } from "@supabase/auth-helpers-nextjs";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const GlobalLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const userStateCheck = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    userStateCheck();
  }, [setUser]);

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
      <Header user={user} />
      <main style={{ flexGrow: 1, height: "100%" }}>{children}</main>
      <Footer />
    </>
  );
};
