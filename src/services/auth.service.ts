import api from "../utils/api";

export const login = (data: { email: string; password: string } ) => {
    api.post("/users/login",data);

}

export const signup = (data: { 
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}) => {
    api.post("/users/register",data);
}

export const forgotPassword = (email: string) => {
    api.post("/users/forgot-password", { email });
}

export const resetPassword = (data: { 
    token: string;
    password: string;
 }) => {
    api.post("/users/reset-password", data);
}

export const getProfile = () => {
    return api.get("/auth/profile");
}