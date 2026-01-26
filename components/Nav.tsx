import Image from 'next/image'
import React from 'react'

function Nav() {
  return (
    <nav className='bg-ocean h-20 flex items-center p-2'>
       <div className="container mx-auto flex justify-between items-center">
          <Image src={"/assets/itas_logo.png"} alt='Insituto Itas' width={350} height={100}/>
          <ul className='text-white font-neulis-neue flex gap-8 text-lg cursor-pointer'>
            <li>Inicio</li>
            <li>Cursos</li>
            <li>Especialistas</li>
            <li>Contacto</li>
          </ul>
       </div>
    </nav>
  )
}

export default Nav