import { InferType } from "yup";
import { loginSchema, signupSchema, forgotPasswordSchema, resetPasswordSchema } from "../schemas/auth.schema";

export type LoginFormValues = InferType<typeof loginSchema>;
export type SignupFormValues = InferType<typeof signupSchema>;
export type ForgotPasswordValues = InferType<typeof forgotPasswordSchema>;
export type ResetPasswordFormValues = InferType<typeof resetPasswordSchema>;