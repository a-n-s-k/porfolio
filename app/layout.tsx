import "./globals.css"
import "./icon.css";
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { HeaderNavbar}  from "@/components/site/header-navbar"
import { FooterNavbar }  from "@/components/site/footer-navbar"
import { TailwindIndicator } from "@/components/site/tailwind-indicator"
import { ThemeProvider } from "@/components/site/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico"
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="fr" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <HeaderNavbar />
              <main>{children}</main>
              <FooterNavbar />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
  )
}