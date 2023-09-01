"use client";
import { FC, useState, useEffect } from "react";

import { supabase } from "@/helpers/supabase/supabaseClient";
import { User } from "@supabase/auth-helpers-nextjs";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const GlobalLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user);

  useEffect(() => {
    const userStateCheck = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    userStateCheck();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <main style={{ flexGrow: 1, height: "100%" }}>{children}</main>
      <Footer />
    </>
  );
};
