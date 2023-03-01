import Image from 'next/image';
import { FC } from 'react';



 export type BlogProps = {
    pic: string,
    picAlt?:string,
    title:string,
    subtitle: string,
    fecha: string,
    avatar?:string,
    author?: string,
    tags?:[],    
    isMember?: boolean,
    slug?: string,
 }


const BlogCard: FC<BlogProps>= ({pic, title, fecha, avatar,author, tags, subtitle, isMember, picAlt}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <a href="#">
            <Image className="rounded-t-lg"
                src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${pic}`}
                alt={`${picAlt}`}
                width={400}
                height={330} />
        </a>

        <div className="p-5">

            <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <Image className="w-8 h-8 rounded-full" src="/images/01.jpg" alt="Neil image" width={50} height={50} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {fecha}
                        </p>
                    </div>
                </div>
            </div>

            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </a>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {subtitle}
            </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-400 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800">
                Leer más
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>

        </div>
    </div>
  )
}

export default BlogCard