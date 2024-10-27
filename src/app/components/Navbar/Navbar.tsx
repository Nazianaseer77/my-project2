import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    
      <header className='bg-gray-800 py-4'>
        <nav className='flex justify-between items-center px-6'>
          <div className='text-2xl text-gray-200'>BIO TECH</div>
          <ul className='flex gap-7'>
            <li><Link href={"/"} className='text-white underline decoration-red-500
             hover:text-red-500'>Home</Link></li>
             <li><Link href={"/about"} className='text-white underline decoration-red-500
             hover:text-red-500'>About</Link></li>
             <li><Link href={"/contact"} className='text-white underline decoration-red-500
             hover:text-red-500'>Contact</Link></li>
             <li><Link href={"/service"} className='text-white underline decoration-red-500
             hover:text-red-500'>Service</Link></li>




          </ul>

          

        </nav>
    </header>
  )
}

export default Navbar
