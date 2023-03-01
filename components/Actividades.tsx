

import React from 'react'
import Gallery from './Gallery'
import Carousel from 'react-material-ui-carousel'




const Actividades = () => {



   // imagenes de serenata

   const serenataImages:any = [
    {src:'/serenata/01.jpg', alt:'serenata'}, {src:'/serenata/02.jpg', alt:'zambo'},
    {src:'/serenata/03.jpg', alt:'publico'}, {src:'/serenata/04.jpg', alt:'familia'},
    {src:'/serenata/05.jpg', alt:'serenata'}
  ]

  return (
    <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex flex-col py-6'>
        <div className='flex flex-col h-screen overflow-auto py-6' style={{'paddingTop':'100px', 'paddingBottom':'50px'}}>


        <div className='px-2 py-4'>
            <h2 className="text-xl font-bold mb-4 text-white rounded-lg p-2 pl-6">
            📣| ¡GRAN SERENATA TURÍSTICA ! 🎺🎤
            </h2>
            <p className="text-gray-200 my-2 px-4 pb-4">
            🔰 Con mucha algarabía y entusiasmo cientos de familias y amigos se dieron cita en
            el mirador Grau para disfrutar de un gran espectáculo musical en el marco de la celebración
            por la XXIX Semana Turística de Barranca, el invitado especial Zambo Barbieri y distintas agrupaciones
            locales pusieron a bailar a todos los asistentes.
            </p>

            <Carousel>
                {
                  serenataImages?
                  serenataImages.map( (item:any, i:any) => <Gallery key={i} src={item.src} alt={item.alt} /> )
                  : false
                }
            </Carousel>

        </div>




        </div>
    </div>
  )
}

export default Actividades