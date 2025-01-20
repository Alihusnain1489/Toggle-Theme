import React from 'react'
import ThemeBtn from './ThemeBtn'

const Navbar = () => {
  return (
    <nav className='text-black px-8 md:px-16 lg:px-24 dark:bg-black dark:text-white'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div><button className='hover:text-blue-500 text-2xl font-bold hidden md:inline cursor:pointer'>Ali Husnain </button></div>
            <div className='space-x-6'>
                
                <a href="#about" className='hover:text-blue-500'>About Me</a>
                <a href="#service" className='hover:text-blue-500'>Services</a>
                <a href="#project" className='hover:text-blue-500'>Projects</a>
                <a href="#contact" className='hover:text-blue-500'>Contact</a>
            </div>
            <ThemeBtn />
        </div>  
    </nav>
  )
}

export default Navbar