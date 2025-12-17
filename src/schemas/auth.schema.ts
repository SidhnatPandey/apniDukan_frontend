import * as yup from "yup";

/* ================= LOGIN ================= */
export const loginSchema = yup.object({
    email: yup.string().required("Email is required")
    .email("Invalid email address"),
    password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

/* ================= SIGNUP ================= */
export const signupSchema = yup.object({
    name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

    email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
    
    password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

    confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

/* ================= FORGOT PASSWORD ================= */
export const forgotPasswordSchema = yup.object({
    email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
});

/* ================= RESET PASSWORD ================= */
export const resetPasswordSchema = yup.object({
    password: yup
    .string()
    .required("Password must be at least 8 characters"),

    confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Password do not match"),
});