

import Image from 'next/image';
import {Layout} from '../components/Layout';
import BlogCard from '../components/blogCard/BlogCard';
import { fetcher } from '../lib/api'
import { FC } from 'react';



type noticiasProps = {
  noticias: any
}


const Home: FC<noticiasProps> = ({noticias}) => {

  const posts = noticias.data
  console.log(noticias.data)
  console.log(noticias.data[0].attributes.image.data.attributes.url)

  return (
    <>
      <Layout>
        <div
          className='bg-gradient-to-r from-gray-50 via-green-50 to-gray-50 flex flex-col'
        >
                  
          <div className='flex justify-center h-[calc(100vh-50px)]'>          

            <Image
                src="/logo_1.png"
                alt="Semana Turística"
                width={250}
                height={304}
                className="self-center"            
              />            

          </div>

          {
            posts?
            posts.map( (post:any) => (

              <BlogCard key={post.attributes.title}
              pic={post.attributes.image.data.attributes.formats.small.url}
              title={post.attributes.title}
              subtitle={post.attributes.subtitle}
              fecha={post.attributes.publicacion}
              picAlt={post.attributes.image.data.attributes.alternativeText}
              />             

            ))
            : false
          }


        </div>



      </Layout>
      
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const noticiasResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/noticias?populate=*`);
  console.log(noticiasResponse)
  return {
    props: {
      noticias: noticiasResponse
    }
  }
}
