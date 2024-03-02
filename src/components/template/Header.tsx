import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"

interface HeaderProps {

}

const links = [
    {
        name: "Início",
        href: "/"
    },
    {
        name: "Explorar",
        href: "/explorar"
    },
    {
        name: "Projetos",
        href: "/projetos"
    },
    {
        name: "Sobre Nós",
        href: "/sobre"
    },
    {
        name: "Contato",
        href: "/contato"
    },
]

export default function Header(props : HeaderProps){
    return(
        <header className="bg-white z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-sm rounded-lg">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
            <Image src={"/logo.svg"} alt="logo" width={36} height={36} />

            </div>
      
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {links.map((link) => 
                    <li key={link.href} className="text-gray-500 transition hover:text-gray-500/75">
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
      
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
              <Button>Login</Button>

      
                <div className="hidden sm:flex">
                <Button variant={"secondary"}>Cadastrar</Button>
                </div>
              </div>
      
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}