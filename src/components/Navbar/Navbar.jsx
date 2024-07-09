import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "../ResponsiveMenu.jsx";

export const NavLinks = [
    {
        id: "1",
        name: "HOME",
        link : "/#",
    },
    {
        id: 2,
        name: "CARS",
        link: "/#cars",
    },
    {
        id: 3,
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: 4,
        name: "BOOKING",
        link: "/#booking",
    },
]

const Navbar = ({theme, setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);

    const togglemenu = () => {
        setShowMenu(!showMenu);
    };
  return (
    <div className='relative z-40 shadow-md w-full dark:bg-dark dark:text-white  duration-300 '>
      <div className="container py-2 md:py-0">
        <div className='flex justify-between items-center'>
            <div>
            <span className='text-3xl font-bold font-serif'>Car Rental</span>
            </div>
      <nav className="hidden md:block">
           <ul className='flex items-center gap-8'>
            { NavLinks.map(({id},{name},{link})=>
             (
                    <li key={id} className='py-4'>
                        <a
                        href={link} 
                        className='  text-lg 
                        hover:border-b-2 
                        hover:text-primary py-2 
                        hover:border-primary 
                        transition-colors 
                        duration-500 
                        font-medium' > 
                        {name}
                        </a>
                        </li>
                ))}
                {/* DarkMode feature implement */}
                    { theme === "dark"?(
                            <BiSolidSun 
                            onClick={()=>setTheme ("light")} className='text-2xl' 
                            />):(
                                 <BiSolidMoon onClick={()=>setTheme ("dark")} className='text-2xl' /> 
                        )}
                   </ul>
                   </nav>
                {/* Mobile view */}
               <div className="flex items-center gap-4 md:hidden">
                {/* dark mode Icons*/}
                {theme === "dark" ? (
                    <BiSolidMoon 
                    onClick={()=> setTheme("light")}
                    className="text-2xl" />
                ):(
                    <BiSolidMoon 
                    onClick={()=> setTheme("dark")}
                    className="text-2xl" />
                )}
                {/* Mobile Hamburger icon */}
                { showMenu?(
                        <HiMenuAlt1
                        onClick={togglemenu}
                        size={30}
                        className="cursor-pointer
                        transition-all"
                        />
                    ):(
                        <HiMenuAlt3 
                         onClick={togglemenu} 
                         size ={30} 
                         className='cursor-pointer transition-all '
                        />)}
            </div>
          </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;