import React from 'react'

const CardProject = ({ proyecto }) => {
  return (
    <div>
      <a href={proyecto.link} target='_blank' rel="noreferrer">
        <div className='flex justify-between items-center bg-[#f2f2f2] relative overflow-hidden dark:shadow-neutral-700 group px-10 rounded-3xl h-44 hover:scale-105 transition-transform border-b-4 border-r-4 border-primary-mousse hover:border-0'>
          <h3 className='font-lato font-semibold leading-none'>{proyecto.nombre}</h3>
          <div className='size-28 flex items-center justify-center'>
            <img src={proyecto.imagen} alt="red nube" />
          </div>
          <div className='flex flex-col h-full w-full inset-0 absolute bg-primary-mousse items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
            <p className='font-semibold text-sm md:text-xs lg:text-base xl:text-sm font-poppins text-center text-white px-10'>{proyecto.descripcion}</p>
            <div className='flex flex-col pt-4'>
              <div className='flex flex-wrap gap-1 justify-center text-white font-semibold'>
                {proyecto.tecnologias.map((tec, index) =>
                  <div className='inline-flex items-center rounded-md border px-5 py-0.5 text-xs' key={index}>{tec}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardProject