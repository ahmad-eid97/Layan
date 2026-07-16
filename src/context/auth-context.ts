import { createContext, use } from "react"

export interface AuthUser {
  username: string
  email: string
  phone?: string
  birthDate?: string
  gender?: string
  country?: string
  city?: string
}

export interface RegisterData extends AuthUser {
  password: string
}

export interface AuthContextValue {
  user: AuthUser | null
  login: (email: string, password: string) => Promise<AuthUser>
  register: (data: RegisterData) => Promise<AuthUser>
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth() {
  const ctx = use(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider")
  return ctx
}
