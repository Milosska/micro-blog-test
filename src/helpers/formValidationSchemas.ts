import * as yup from "yup";

export const registerSchema = yup.object({
  nickname: yup
    .string()
    .max(16, "Nickname is too long")
    .required("Nickname is required"),
  type: yup
    .string()
    .oneOf(["author", "commentator"], "Invalide option")
    .required("Account type is required"),
  email: yup
    .string()
    .email()
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password is too short")
    .required("Password is required"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email()
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password is too short")
    .required("Password is required"),
});

const imageSchema = yup
  .mixed()
  .test("fileSize", "File too large", (value) => {
    if (value instanceof File) {
      const MAX_FILE_SIZE = 1000000;
      return (value?.size as number) <= MAX_FILE_SIZE;
    }
  })
  .test("fileFormat", "Unsupported format", (value) => {
    if (value instanceof File) {
      const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];
      return supportedFormats.includes(value?.type as string);
    }
  })
  .required("Image is required");

export const postSchema = yup.object({
  title: yup
    .string()
    .max(100, "Title is too long")
    .required("Title is required"),
  summary: yup
    .string()
    .max(500, "Summary is too long")
    .required("Summary is required"),
  topic: yup
    .string()
    .oneOf(
      ["science", "history", "art", "literature", "politics"],
      "Invalide option"
    )
    .required("Type is required"),
  text: yup.string().max(5000, "Text is too long").required("Text is required"),
  image: imageSchema,
});
