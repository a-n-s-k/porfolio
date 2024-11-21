import Link from "next/link"
import AnskLogo from "@/components/site/ansk-logo"

const navLinks = [
  { name: "Porfolio", lienurl: "/porfolio", },
  { name: <AnskLogo />, lienurl: "/", },
  { name: "A Propos", lienurl: "/apropos", },
]

export function HeaderNavbar() {
  return (
    <header className="flex dark:bg-slate-900 bg-slate-300 justify-center bg-background sticky top-0 z-40 w-full md:w-auto border-b">
      <nav className="flex h-16 items-center justify-between gap-6 xl:gap-8">
        {navLinks.map((navLink, index) => 
          <Link key={index} href={navLink.lienurl} className="my-8 flex items-center gap-2 lg:my-10">
            <span className="font-bold lg:inline-block text-3xl text-slate-800 dark:text-slate-500">
              {navLink.name}
            </span>
          </Link>
        )}
      </nav>
    </header>
  )
}
