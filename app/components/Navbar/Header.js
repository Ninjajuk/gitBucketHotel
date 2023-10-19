'use client'
import React from 'react';
import {navigationtop,navigationbottom} from './navdata'
import Link from 'next/link'
const Header = () => {
  const handleSubMenuHover = (e, index) => {
    // You can add logic to handle submenu visibility here
    // For simplicity, let's just add a class to show the submenu
    const submenu = e.currentTarget.querySelector('.submenu');
    if (submenu) {
      submenu.classList.toggle('hidden');
    }
  };
  return (
    <header className="bg-[#cee3d9]   sticky top-0 z-10 w-full">
      <nav className="">
        <div className="hidden md:flex items-center justify-around py-[13px] px-auto">
          <div className="max-w-[200px]">
            <Link className="navbar-brand" href="/">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587580181090-EYHUTAU9LD1PHOKJD8XM/cle_logo_01.png?format=1500w"
                alt=""
              />
            </Link>
          </div>


          <div className="flex flex-col space-x-4 px-2">
            <div className='flex px-2 py-2'>
            {navigationtop.map((link, index) => (
                <div key={link.name} className="relative group" onMouseEnter={(e) => handleSubMenuHover(e, index)} onMouseLeave={(e) => handleSubMenuHover(e, index)}>
                  <Link href={link.href} className='px-2 py-1 text-[#ba9d5a] hover:text-[#cf3726]'>
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="submenu hidden  absolute top-full left-0 bg-[#ba9d5a] border border-gray-300 rounded-md p-2 w-[250px] z-10">
                      {link.submenu.map((sublink) => (
                        <Link key={sublink.name} href={sublink.href} className='block px-2 py-1 text-white hover:text-red-800'>
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='flex py-2'>
            {navigationbottom.map((link, index) => (
                <div key={link.name} className="relative group" onMouseEnter={(e) => handleSubMenuHover(e, index)} onMouseLeave={(e) => handleSubMenuHover(e, index)}>
                  <Link href={link.href} className='px-2 py-1 text-[#ba9d5a] hover:text-[#cf3726]'>
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="submenu hidden absolute top-full  bg-[#ba9d5a] border border-gray-300 rounded-md p-2 w-[250px] ">
                      {link.submenu.map((sublink) => (
                        <Link key={sublink.name} href={sublink.href} className='block px-2 py-1 text-white hover:text-red-800'>
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <a href="#" className='hover:text-[#cf3726]'>
              <span className="px-4 ">BOOK</span>
              <span>NOW</span>
            </a>
            <a href="#"className='hover:text-[#cf3726]'>
              <span className="px-4 ">(470)</span>
              <span>485-0485</span>
            </a>
          </div>
        </div>
        <div className='w-full border-2 border-yellow-500'></div>

        <div
      className="md:hidden sticky top-0 z-10  flex items-center justify-around p-4 bg-[#cee3d9] "

    >

      {/* User icon */}
      <div className="max-w-[200px]">
            <a className="navbar-brand" href="#">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1587580181090-EYHUTAU9LD1PHOKJD8XM/cle_logo_01.png?format=1500w"
                alt=""
              />
            </a>
          </div>
      <div>
        <button
          className="md:hidden text-gray-600"
        
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </div>
      </nav>
      {/* <div className='border-4 border-indigo-600'></div> */}
    </header>
   
   
  );
};

export default Header;
