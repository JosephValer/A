'use client'
import { navLinks } from "@/constant/constant";
import React, { use, useEffect } from "react";
import Link from "next/link";
import { MdLogin } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import ThemeToggle from "@/components/Helper/themeToggle";
import { usePathname } from "next/dist/client/components/navigation";

type Props ={
    openNav:()=>void
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = React.useState(false);
  const pathname = usePathname();
  const alwaysColored = ["/login"]; // rutas donde quieres siempre color

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) setNavBg(true); // una vez true, no volvemos a false
    };
    window.addEventListener("scroll", handleScroll);
    // también comprobar en mount por si el usuario ya está desplazado
    if (window.scrollY > 90) setNavBg(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className={`transition-all duration-200 h-[12vh] fixed w-full z-50 top-0 ${navBg ? 'bg-[#243c5a] text-white shadow' : 'bg-transparent text-white'}`}>
        <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
            <div className="text-white font-bold text-2xl sm:text-3xl">CollabOwl</div>
            <div className="hidden lg:flex items-center space-x-10">
                {navLinks.map((link) => {
                    return <Link 
                    href={link.url} 
                    key={link.id} 
                    className="text-white hover:text-gray-300 font-semibold transition-all duration-200"
                    >
                        {link.label}
                    </Link>;
                })}
            </div>
            <div className="flex items-center space-x-4">
                <Link
                href="/login"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                style={{ backgroundColor: "var(--color-regal-orange)" }}
                >
                <span className="relative z-20 flex items-center text-sm">
                    Sign In
                </span>
                </Link>
                <ThemeToggle />
                <RiMenu3Line 
                onClick={openNav}
                className="w-8 h-8 lg:hidden cursor-pointer text-white"
                />
            </div>
        </div>
    </div>
  );
};

export default Nav;