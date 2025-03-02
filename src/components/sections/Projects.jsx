import React from 'react'
import CardProject from '../CardProject'
import proyectos from '../../constants/data'

const Projects = () => {

  return (
    <div>
      <h2 className='text-lg font-quicksand font-bold text-primary-mousse pt-8'>💻 Proyectos</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-5 pt-2 cursor-auto'>
        {proyectos.map((proyecto) =>
          <CardProject key={proyecto.id} proyecto={proyecto}/>
        )}             
      </div>
    </div>
  )
}

export default Projects