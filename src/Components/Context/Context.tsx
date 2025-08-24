import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type AuthContextType = User | null;

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>(null)

export const AuthProvider = ({ children }: AuthProviderProps) =>{

    const [user, setUser] = useState< User | null>(null)

    useEffect(() =>{
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);