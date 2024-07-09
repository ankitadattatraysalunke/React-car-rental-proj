import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLinks } from './Navbar/Navbar';

const ResponsiveMenu = ({showMenu}) => {
  console.log("showMenu", showMenu);
  return (
    <div className={`${ showMenu? "left-0": "-left-full" }
     fixed bottom-0 top-0 z-20 flex bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md  flex-col justify-between
     dark:text-white px-8 pb-6 pt-16 transition-all duration-300 `} > 
    <div className='card'>
      <div className='flex items-center justify-start gap-3 '>
      <FaUserCircle size={50} />
      <div>
        <h1>Hello User </h1>
        <h1 className='text-sm text-slate-500' >Premium user </h1>
      </div>
      </div>
      {/* Links */}
      <nav className='mt-12 '>
        <ul className='space-y-4 text-xl '>
        {NavLinks.map((data)=>(
            <li>
              <a href={data.link}
              className='mb-5 inline-block'
              >{data.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
      {/* Footer */}
      <div className='footer'>
        <h1>Made with ❤ by <a href="https://dilshad-ahmed.github.io">The Coding Journey</a>{" "}
        </h1>
      </div>
    </div>
  )
}

export default ResponsiveMenu;