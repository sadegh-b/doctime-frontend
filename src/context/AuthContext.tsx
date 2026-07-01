import { createContext, useContext, useState } from "react"

type User = {
  id: number
  name: string
  email: string
  role: string
}

type AuthContextType = {
  user: User | null
  loginUser: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<User | null>(() => {

    const saved = localStorage.getItem("user")

    return saved ? JSON.parse(saved) : null

  })

  function loginUser(user: User) {

    setUser(user)

    localStorage.setItem("user", JSON.stringify(user))

  }

  function logout() {

    setUser(null)

    localStorage.removeItem("user")

  }

  return (

    <AuthContext.Provider
      value={{ user, loginUser, logout }}
    >
      {children}
    </AuthContext.Provider>

  )
}

export function useAuth() {

  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be inside AuthProvider")
  }

  return context
}
