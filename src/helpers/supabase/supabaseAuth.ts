import { supabase } from "./supabaseClient";
import { IRegisterForm, ILoginForm } from "@/types/formTypes";

export const handleRegistration = async (userData: IRegisterForm) => {
  const { email, password, nickname, type } = userData;

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (user) {
      const response = await insertCustomUserData({
        id: user!.id,
        nickname,
        type,
        email,
      });

      return {
        message: "Registrated successfully! Please, verify your email",
      };
    } else {
      throw new Error();
    }
  } catch (error: any) {
    console.error("Unexpected error during registration:", error.message);
    return { message: "Registration failed." };
  }
};

async function insertCustomUserData(userData: {
  id: string;
  nickname: string;
  type: string;
  email: string;
}) {
  try {
    const { data, error } = await supabase.from("users_data").insert([
      {
        ...userData,
      },
    ]);

    if (error) {
      throw new Error();
    }
  } catch (error: any) {
    console.error(
      "Unexpected error during custom user data insertion:",
      error.message
    );
  }
}

export const handleLogin = async (userData: ILoginForm) => {
  const { email, password } = userData;

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error || !user) {
      throw new Error("User not found.");
    }

    const userData = await retrieveAdditionalData(user.id);

    if (!userData) {
      throw new Error("User not found.");
    }

    const combinedData = {
      ...user,
      ...userData,
    };

    return { user: combinedData };
  } catch (error: any) {
    console.error("Unexpected error during login:", error.message);
    return { user: null };
  }
};

async function retrieveAdditionalData(userId: string) {
  try {
    const { data: userData, error: dataError } = await supabase
      .from("users_data")
      .select("*")
      .eq("id", userId)
      .single();

    if (dataError) {
      throw new Error("Error fetching custom user data.");
    }

    return userData;
  } catch (error: any) {
    console.error("Unexpected error during login:", error.message);
  }
}

export const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error();
    }
  } catch (error: any) {
    console.error("Unexpected error during logout:", error.message);
  }
};

export const handleRefresh = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error();
    }

    const userData = await retrieveAdditionalData(user.id);

    if (!userData) {
      throw new Error("User not found.");
    }

    const combinedData = {
      ...user,
      ...userData,
    };

    return combinedData;
  } catch (error: any) {
    console.error("Unexpected error during refresh:", error.message);
    return null;
  }
};
