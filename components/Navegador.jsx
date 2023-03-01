
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import {ActiveLink} from './ActiveLink'



export const Navegador = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      
        <nav className="pl-4 sm:px-4 py-2.5 fixed z-20 top-0 left-0 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    className="w-40 mr-3 sm:w-52 mt-2"
                    alt="Semana Turística"
                    width={200}
                    height={76}
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-green-700">
                    
                  </span>
           </Link>
          <div className="flex md:order-2 pr-4">
              <button data-collapse-toggle="navbar-sticky" type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>





          <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-2 " id="navbar-sticky`}>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white bg-opacity-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:bg-opacity-50">
              <li>
                <ActiveLink text='Inicio' href="/" />
              </li>
              <li>
                <ActiveLink text='Actividades' href="/actividades" />
              </li>
              <li>
                <ActiveLink text='Nosotros' href="/nosotros" />
              </li>
            </ul>
          </div>
          </div>
        </nav>


    </>
  );
}
