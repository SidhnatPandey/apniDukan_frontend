"user client";

import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../services/auth.service";

type AuthContextType = {
    user: any;
    loading: boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getProfile().then((res) => setUser(res.data))
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }, []);

    const logout = () => {
        localStorage.removeItem("accessToken");
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);