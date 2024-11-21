import Link from "next/link"
import { AtSign } from "lucide-react"
import { SiGithub } from '@icons-pack/react-simple-icons';
import { ThemeToggle } from "@/components/site/theme-toggle";

export function FooterNavbar() {
  return (
    <nav className="flex justify-center dark:bg-slate-900 bg-slate-300 bg-background sticky top-0 z-40 w-full md:w-auto">
      <div className="container flex h-16 items-center space-x-4 justify-between">
      <div className="flex items-center  justify-start space-x-4 mx-2">
        <Link  className="font-bold lg:inline-block lg:mr-6" href="mailto:adjevinsk@gmail.com">
          <AtSign className="dark:text-slate-500" />
        </Link>
      </div>
      <div >
        <Link
          href="https://github.com/a-n-s-k/"
          target="_blank"
          rel="noreferrer"
          className="flex mx-8"
        >
          <SiGithub title="GitHub ansk" />
        </Link>
      </div>
      <div className="flex mx-2">
        <ThemeToggle />
      </div>
      </div>
    </nav>
  )
}

