


import Link from 'next/link'
import React from 'react'



export const Footer = () => {
  return (
    <>
    
        <footer className=" fixed bottom-0 left-0 z-20 w-full p-4 md:flex md:items-center md:justify-between md:p-6  bg-white/90 dark:bg-gray-900/80 placeholder:shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 dark:shadow-none">
            <span className="text-sm text-green-600 sm:text-center ">© 2023 <Link href="/" className="hover:underline">                       
             | Barranca.pe™</Link></span>
        </footer>


    </>
  )
}
