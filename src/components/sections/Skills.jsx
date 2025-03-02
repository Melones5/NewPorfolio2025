import React from 'react'
import skillList from '../../constants/skills'


const Skills = () => {

  return (
    <div className='pt-8'>
      <h2 className='text-lg font-quicksand font-bold text-primary-mousse'>📚 Conocimientos</h2>
      <div className='flex flex-col pt-2'>
        <div className='flex flex-wrap gap-1 justify-start cursor-auto'>
          {skillList.map((skill) =>
            <span className='inline-flex items-center rounded-md px-2 py-1 text-sm font-bold text-neutralText bg-gray-200 font-quicksand hover:bg-primary-mousse hover:text-white hover:font-bold' key={skill.id}>
              {skill.nombre}
            </span>
          )}
        </div>
      </div>      
    </div>
  )
}

export default Skills