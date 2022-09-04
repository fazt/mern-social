import { z } from "zod";

export const SignupUserSchema = z.object({
  body: z.object({
    firstname: z.string({
      required_error: "Firstname is required",
    }),
    lastname: z.string({
      required_error: "Lastname is required",
    }),
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

export const SigninUserSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6),
  }),
});

export type SigninUserSchemaType = z.infer<typeof SigninUserSchema>["body"];
export type SignupUserSchemaType = z.infer<typeof SignupUserSchema>["body"];
