import React, { FC } from "react";
import Image from "next/image";



type PropsImg = {
    src: string,
    alt: string,
}

const Gallery: FC<PropsImg> = ({src, alt}) => {

  return (

    <div className="lg:flex lg:justify-center">

                    <Image src={`/images${src}`}
                        height={400}
                        width={600}
                        alt={alt} />
    </div>
  )               

};

export default Gallery;