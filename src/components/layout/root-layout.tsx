import { Outlet, ScrollRestoration } from "react-router"
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "./footer"
import { Navbar } from "./navbar"

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
      <ScrollRestoration />
    </div>
  )
}
