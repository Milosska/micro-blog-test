import { supabase } from "./supabaseClient";
import { IRegisterForm } from "@/types/formTypes";

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
      await insertCustomUserData({
        id: user.id,
        nickname,
        type,
        email,
      });
      return { message: "Registrated successfully!" };
    } else {
      throw new Error();
    }
  } catch (error: any) {
    console.error("Unexpected error during registration:", error.message);
    return { message: error.message };
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
