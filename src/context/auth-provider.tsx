import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import {
  AuthContext,
  type AuthUser,
  type RegisterData,
} from "./auth-context"

const STORAGE_KEY = "layan-user"

function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AuthUser) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(readStoredUser)

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    else localStorage.removeItem(STORAGE_KEY)
  }, [user])

  const login = useCallback(async (email: string, _password: string) => {
    const next: AuthUser = { username: email.split("@")[0] || "student", email }
    setUser(next)
    return next
  }, [])

  const register = useCallback(async ({ password: _pw, ...data }: RegisterData) => {
    setUser(data)
    return data
  }, [])

  const logout = useCallback(() => setUser(null), [])

  const value = useMemo(
    () => ({ user, login, register, logout }),
    [user, login, register, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
