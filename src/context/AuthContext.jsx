import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = (email, password) => {
        // Mock login
        setUser({ id: 1, name: 'Admin User', email, role: 'admin' })
        return true
    }

    const register = (name, email, password) => {
        setUser({ id: Date.now(), name, email, role: 'customer' })
        return true
    }

    const logout = () => setUser(null)

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)