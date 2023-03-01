import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



const style = {
    color:'fuchsia',
    textDecoration:'underline'
}


export const ActiveLink = ({href, text}) => {

    const {asPath} = useRouter();


  return (


    <Link style={ asPath === href ? style : null } href={href}
        className="block py-2 pl-3 pr-4 text-fuchsia-500 bg-green-50 rounded md:bg-transparent md:text-fuchsia-400 md:p-0 dark:text-white"
        aria-current="page"
    >
        {text}
    </Link>
  )
}
