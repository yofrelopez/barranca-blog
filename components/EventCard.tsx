
import Image from 'next/image';
import { FC } from 'react';

type EventosProps = {
    pic: string,
    nombre:string,
    Lugar: string,
    fecha:string,
    hora:string,
    descripcion: string,
    key?: string
 }


const EventCard:FC<EventosProps> = ({pic, nombre, Lugar, fecha, hora, descripcion}) => {
  return (

    <div className='p-1'>

        <div className="bg-gradient-to-br from-yellow-200 to-pink-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-bold mb-4 bg-orange-500 text-white rounded-lg p-1">{nombre}</h2>

        <div>
            <Image src={pic} alt={nombre} width={280} height={230}
            className="w-70 h-48 object-cover object-center mx-2"
            />
            <div className='p-2'>
            <p className="text-gray-700 mb-2">{descripcion}</p>
            
            <div className="flex justify-between mb-2">
                <p className="text-gray-700 font-bold"><span role="img" aria-label="calendario">📅</span> Fecha:</p>
                <p className="text-gray-700">{fecha}</p>                
            </div>

            <div className="flex justify-between mb-2">
                <p className="text-gray-700 font-bold"><span role="img" aria-label="reloj">⏰</span> Hora:</p>
                <p className="text-gray-700">{hora}</p>                  
            </div>

            <div className="flex justify-between mb-2">
                <p className="text-gray-700 font-bold"><span role="img" aria-label="reloj"> 📍 </span> Lugar:</p>
                <p className="text-gray-700">{Lugar}</p>                  
            </div>                
            
            </div>              

        </div>             

        </div>

    </div>

  )
}

export default EventCard