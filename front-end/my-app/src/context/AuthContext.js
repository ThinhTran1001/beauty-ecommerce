import {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const[user, setUser] = useState(null);
    const loginUser = (userData) => {
        setUser(userData);
        localStorage.setItem("token", userData.token);
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}