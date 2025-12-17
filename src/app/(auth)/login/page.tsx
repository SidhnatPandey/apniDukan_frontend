"use client";

import { loginSchema } from "@/src/schemas/auth.schema";
import { LoginFormValues } from "@/src/types/auth.types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/src/services/auth.service";

const Login = () => {
    const router = useRouter();
    
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = async (data: LoginFormValues) => {
        const res = await login(data);
        // localStorage.setItem("accessToken", res.data.token);
        router.push("/dashboard");
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input
      type="password"
      {...register("password")}
      placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  )
}

export default Login;
