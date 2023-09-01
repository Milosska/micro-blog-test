import { object, string } from "yup";

export const registerSchema = object({
  nickname: string()
    .max(16, "Nickname is too long")
    .required("Nickname is required"),
  type: string()
    .oneOf(["author", "commentator"], "Invalide option")
    .required("Account type is required"),
  email: string()
    .email()
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required"),
  password: string()
    .min(6, "Password is too short")
    .required("Password is required"),
});

export const loginSchema = object({
  email: string()
    .email()
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required"),
  password: string()
    .min(6, "Password is too short")
    .required("Password is required"),
});