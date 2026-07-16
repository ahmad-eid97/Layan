import { createBrowserRouter } from "react-router"
import RootLayout from "@/components/layout/root-layout"
import { GuestOnly, RequireAuth } from "@/components/route-guards"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, lazy: async () => ({ Component: (await import("@/pages/home")).default }) },
      { path: "about-us", lazy: async () => ({ Component: (await import("@/pages/about-us")).default }) },
      { path: "contact-us", lazy: async () => ({ Component: (await import("@/pages/contact")).default }) },
      { path: "questions", lazy: async () => ({ Component: (await import("@/pages/questions")).default }) },
      { path: "services", lazy: async () => ({ Component: (await import("@/pages/services")).default }) },
      { path: "news", lazy: async () => ({ Component: (await import("@/pages/news")).default }) },
      { path: "news/:newsId", lazy: async () => ({ Component: (await import("@/pages/news-details")).default }) },
      { path: "blogs", lazy: async () => ({ Component: (await import("@/pages/blogs")).default }) },
      { path: "blogs/:blogId", lazy: async () => ({ Component: (await import("@/pages/blog-details")).default }) },
      { path: "agent", lazy: async () => ({ Component: (await import("@/pages/agent")).default }) },
      { path: "education", lazy: async () => ({ Component: (await import("@/pages/education")).default }) },
      { path: "university/:id", lazy: async () => ({ Component: (await import("@/pages/university")).default }) },
      { path: "all-universities", lazy: async () => ({ Component: (await import("@/pages/all-universities")).default }) },
      { path: "program/:id", lazy: async () => ({ Component: (await import("@/pages/program-details")).default }) },
      { path: "programs", lazy: async () => ({ Component: (await import("@/pages/programs")).default }) },
      { path: "programs-filter", lazy: async () => ({ Component: (await import("@/pages/programs-filter")).default }) },
      {
        Component: GuestOnly,
        children: [
          { path: "login", lazy: async () => ({ Component: (await import("@/pages/login")).default }) },
          { path: "register", lazy: async () => ({ Component: (await import("@/pages/register")).default }) },
          { path: "admin-register", lazy: async () => ({ Component: (await import("@/pages/admin-register")).default }) },
        ],
      },
      { path: "registered", lazy: async () => ({ Component: (await import("@/pages/registered")).default }) },
      {
        Component: RequireAuth,
        children: [
          { path: "education-info", lazy: async () => ({ Component: (await import("@/pages/education-info")).default }) },
          { path: "profile", lazy: async () => ({ Component: (await import("@/pages/profile")).default }) },
        ],
      },
      { path: "*", lazy: async () => ({ Component: (await import("@/pages/not-found")).default }) },
    ],
  },
])
